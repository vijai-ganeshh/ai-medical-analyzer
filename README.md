# 🩺 AI Medical Report Analyzer

An AI-powered full-stack web application that analyzes medical blood reports using OCR and Gemini AI to provide simplified health insights for users.

---

# 🚀 Features

✅ User Authentication (Signup/Login)  
✅ JWT-based Authentication  
✅ PDF Medical Report Upload  
✅ OCR Text Extraction from Reports  
✅ AI-Powered Medical Analysis  
✅ React Frontend  
✅ Flask Backend API  
✅ SQLite Database Integration  
✅ Protected Dashboard  
✅ Responsive UI  

---

# 🧠 Project Overview

The AI Medical Report Analyzer allows users to:

1. Create an account
2. Login securely
3. Upload blood test reports in PDF format
4. Extract medical text using OCR
5. Analyze reports using Gemini AI
6. Receive simplified explanations of abnormal values

This project demonstrates full-stack development skills along with AI integration.

---

# 🏗️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- CSS

## Backend

- Flask
- Flask-CORS
- Flask-SQLAlchemy
- Flask-JWT-Extended
- Bcrypt

## Database

- SQLite

## AI & OCR

- Google Gemini API
- EasyOCR
- PyMuPDF

---

# 📂 Project Structure

```bash
AI-MEDICAL-ANALYZER/
│
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── ai_utils.py
│   ├── ocr_utils.py
│   ├── uploads/
│   └── instance/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🔐 Authentication System

The project uses:

- JWT Authentication
- Password Hashing with Bcrypt
- Protected Routes
- Local Storage Token Management

---

# ⚙️ Backend Functionalities

## Flask API Endpoints

### Authentication APIs

- `POST /signup`
- `POST /login`

### Report APIs

- `POST /upload-report`

---

# 🧾 OCR Workflow

1. User uploads PDF report
2. PyMuPDF extracts report pages
3. EasyOCR extracts medical text
4. Extracted text is sent to Gemini AI
5. AI generates simplified analysis

---

# 🤖 AI Analysis

Gemini AI is used to:

- Detect abnormal values
- Explain medical terms
- Simplify blood report findings
- Provide readable health summaries

---

# 💾 Database Design

SQLite database stores:

## User Table

| Field | Type |
|---|---|
| id | Integer |
| name | String |
| email | String |
| password | String |

---

# 🎯 Skills Demonstrated

## Frontend Skills

- React Components
- State Management
- API Integration
- React Router
- Form Handling
- Authentication UI

## Backend Skills

- REST API Development
- Flask Framework
- JWT Authentication
- File Upload Handling
- OCR Integration
- AI API Integration

## Database Skills

- SQLAlchemy ORM
- SQLite Database
- CRUD Operations
- User Authentication Storage

---

# 📦 Installation

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

python app.py
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🌐 Future Improvements

- Report History
- Dashboard Analytics
- Download AI Summary
- Email Notifications
- Dark Mode
- Cloud Deployment
- Doctor Recommendation System

---

# 👨‍💻 Author

## Vijai Ganeshh

Full Stack & AI Developer

GitHub:
https://github.com/vijai-ganeshh
