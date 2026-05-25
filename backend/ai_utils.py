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
You are a professional AI medical assistant.

Analyze this medical report.

Give response STRICTLY in this format:

# Patient Summary

Brief summary.

# Abnormal Values

For every abnormal value give:

- Test Name
- Actual Value
- Normal Range
- Severity (High / Moderate / Low)
- Simple explanation

# Recommendations

Give:
- diet suggestions
- exercise suggestions
- lifestyle improvements

# Precautions
#Add right emojis 
Mention health precautions.

Medical Report:
{report_text}
"""

    response = model.generate_content(prompt)

    return response.text