import google.generativeai as genai
import os

from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")

def analyze_medical_report(report_text):

    prompt = f"""
    You are a medical AI assistant.

    Analyze this medical report and explain:
    
    1. Abnormal values
    2. Possible health risks
    3. Simple health suggestions

    Keep explanation beginner friendly.

    Medical Report:
    
    {report_text}
    """

    response = model.generate_content(prompt)

    return response.text