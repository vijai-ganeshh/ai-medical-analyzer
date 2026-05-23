import fitz
import easyocr

reader = easyocr.Reader(['en'])

def extract_text_from_pdf(pdf_path):

    extracted_text = ""

    pdf_document = fitz.open(pdf_path)

    for page_number in range(len(pdf_document)):

        page = pdf_document.load_page(page_number)

        text = page.get_text()

        extracted_text += text

    return extracted_text