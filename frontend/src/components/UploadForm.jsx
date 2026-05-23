import { useState } from 'react'
import axios from 'axios'
import AnalysisCard from './AnalysisCard'

export default function UploadForm() {

  const [file, setFile] = useState(null)

  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState(null)

  const handleUpload = async () => {

    if (!file) {
      alert('Please select a file')
      return
    }

    const formData = new FormData()

    formData.append('file', file)

    try {

      setLoading(true)

      const response = await axios.post(
        'http://127.0.0.1:5000/upload-report',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      setResult(response.data)

    } catch (error) {

      console.log(error)

      alert('Upload failed')

    } finally {

      setLoading(false)
    }
  }

  return (
    <div>

      <div className="card">

        <h2>Upload Medical Report</h2>
          <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={handleUpload}>
          {
            loading ? 'Analyzing...' : 'Upload & Analyze'
          }
        </button>

      </div>

      {
        result && (
          <AnalysisCard
            extractedText={result.extracted_text}
            aiAnalysis={result.ai_analysis}
          />
        )
      }

    </div>
  )
}