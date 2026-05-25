# 🩺🤖 AI Medical Report Analyzer

An AI-powered full-stack medical report analysis web application that allows users to upload blood reports in PDF format, extract medical data using OCR, and generate simplified AI-based health insights using Google Gemini AI.

---

# 🚀 Project Overview

The AI Medical Report Analyzer is a smart healthcare-focused web application designed to help users better understand their medical blood reports.

Users can:

- Upload medical PDF reports
- Extract report text using OCR/PDF parsing
- Analyze health parameters using AI
- Get simplified medical explanations
- View abnormal values and recommendations
- Securely login/signup using JWT Authentication

The project combines:

- Full Stack Web Development
- Artificial Intelligence
- OCR & PDF Processing
- Authentication & Security
- Modern Responsive UI

---

# 🧠 Main Use Case

Many people struggle to understand complex medical reports.

This project helps by:
- Simplifying difficult medical terminology
- Highlighting abnormal values
- Giving AI-generated explanations
- Suggesting health precautions and recommendations

---

# ✨ Features

## 🔐 Authentication System
- User Signup/Login
- JWT-based Authentication
- Protected Routes
- Secure Password Hashing using bcrypt

---

## 📄 Medical Report Upload
- Upload PDF medical reports
- Store uploaded files locally

---

## 🔍 OCR & Text Extraction
- Extract report text from PDFs
- Parse blood report values

---

## 🤖 AI Analysis
- Uses Google Gemini AI
- Generates:
  - Patient Summary
  - Abnormal Values
  - Recommendations
  - Precautions

---

## 🎨 Modern Frontend UI
- Built using React + Tailwind CSS
- Glassmorphism Design
- Gradient UI
- Responsive Design
- Markdown-based AI Rendering

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Markdown
- React Icons

---

## Backend
- Python
- Flask
- Flask-CORS
- Flask-SQLAlchemy
- Flask-JWT-Extended
- bcrypt

---

## Database
- SQLite

---

## AI & OCR
- Google Gemini AI
- PyPDF2 / OCR utilities

---

# 📂 Project Structure

```bash
ai-medical-analyzer/
│
├── backend/
│   ├── app.py
│   ├── ai_utils.py
│   ├── ocr_utils.py
│   ├── models.py
│   ├── config.py
│   ├── requirements.txt
│   └── uploads/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Backend Setup

## 1️⃣ Create Virtual Environment

```bash
python -m venv venv
```

---

## 2️⃣ Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

---

## 3️⃣ Install Backend Dependencies

```bash
pip install flask
pip install flask-cors
pip install flask-sqlalchemy
pip install flask-jwt-extended
pip install bcrypt
pip install python-dotenv
pip install google-generativeai
pip install PyPDF2
```

OR simply:

```bash
pip install -r requirements.txt
```

---

# ⚙️ Frontend Setup

## 1️⃣ Move to Frontend Folder

```bash
cd frontend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Install Additional Packages

```bash
npm install axios
npm install react-router-dom
npm install react-icons
npm install react-markdown
npm install tailwindcss @tailwindcss/vite
```

---

# 🔑 Environment Variables

Create a `.env` file inside backend folder.

```env
GEMINI_API_KEY=your_api_key_here
```

Get API Key from:

https://makersuite.google.com/app/apikey

---

# ▶️ Run Backend

Inside backend folder:

```bash
python app.py
```

Backend runs on:

```bash
http://127.0.0.1:5000
```

---

# ▶️ Run Frontend

Inside frontend folder:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔒 Authentication Workflow

## Signup
- User creates account
- Password gets hashed using bcrypt
- User data stored in SQLite DB

---

## Login
- Credentials verified
- JWT Token generated
- Token stored in Local Storage

---

## Protected Routes
- Unauthorized users cannot access dashboard
- Authentication checked using token

---

# 🤖 AI Workflow

## Step 1
User uploads PDF medical report

## Step 2
OCR/PDF utility extracts text

## Step 3
Extracted text sent to Gemini AI

## Step 4
AI generates:
- Summary
- Abnormal Values
- Recommendations
- Precautions

## Step 5
Frontend displays beautifully formatted analysis

---

# 📸 UI Features

- Gradient Navbar
- Glassmorphism Cards
- Modern Medical Dashboard
- AI Markdown Rendering
- Profile Dropdown
- Responsive Authentication Pages

---

# 🔥 Future Improvements

- Report History Dashboard
- Download AI Analysis as PDF
- Medical Severity Charts
- Dark Mode
- Cloud Deployment
- Better OCR for scanned reports
- AI Chatbot for medical questions
- PostgreSQL Database Integration

---

# 📌 Key Learnings

This project helped in learning:

- Full Stack Development
- REST APIs
- Authentication using JWT
- React State Management
- OCR & PDF Processing
- AI API Integration
- Database Management
- Tailwind CSS Styling
- Secure Backend Development

---

# 👨‍💻 Developed By

## Vijai Ganeshh

- Full Stack & AI Developer
- React + Flask Developer
- Interested in AI/ML and Full Stack Development

GitHub:
https://github.com/vijai-ganeshh

---

# ⭐ If You Like This Project

Give it a ⭐ on GitHub!
