from ai_utils import analyze_medical_report
from ocr_utils import extract_text_from_pdf
import os
import bcrypt
from flask import Flask, request, jsonify
from flask_cors import CORS

from config import Config
from models import db, User

from flask_jwt_extended import (
    JWTManager,
    create_access_token
)
app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "supersecretkey"

jwt = JWTManager(app)

UPLOAD_FOLDER = "uploads"

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
CORS(app)

app.config.from_object(Config)

db.init_app(app)

@app.route("/")
def home():
    return {
        "message": "Database Connected Successfully"
    }

@app.route("/signup", methods=["POST"])
def signup():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    # check if email already exists
    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return jsonify({
            "message": "Email already exists"
        }), 400

    # create new user
    
    hashed_password = bcrypt.hashpw(
    password.encode('utf-8'),
    bcrypt.gensalt()
)

    new_user = User(
        name=name,
        email=email,
        password=hashed_password.decode('utf-8')
    )

    db.session.add(new_user)

    db.session.commit()

    return jsonify({
        "message": "User created successfully"
    }), 201


@app.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    password_match = bcrypt.checkpw(
        password.encode('utf-8'),
        user.password.encode('utf-8')
    )

    if not password_match:
        return jsonify({
            "message": "Invalid password"
        }), 401
    
    access_token = create_access_token(
    identity=user.email
    )
    
    return jsonify({
        "message": "Login successful",
         "token": access_token,
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email
        }
    }), 200

@app.route("/upload-report", methods=["POST"])
def upload_report():

    if "file" not in request.files:
        return jsonify({
            "message": "No file uploaded"
        }), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({
            "message": "No selected file"
        }), 400

    filepath = os.path.join(
        app.config["UPLOAD_FOLDER"],
        file.filename
    )

    file.save(filepath)
    
    extracted_text = extract_text_from_pdf(filepath)

    ai_analysis = analyze_medical_report(extracted_text)

    return jsonify({
    "message": "File uploaded successfully",
    "filename": file.filename,
    "extracted_text": extracted_text,
    "analysis": ai_analysis
}), 200
    
if __name__ == "__main__":

    with app.app_context():
        db.create_all()

    app.run(debug=True)