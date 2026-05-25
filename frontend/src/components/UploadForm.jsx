import { useState } from 'react'
import axios from 'axios'

export default function UploadForm({
  setExtractedText,
  setAnalysis
}) {

  const [file, setFile] = useState(null)

  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {

    if (!file) return

    setLoading(true)

    const formData = new FormData()

    formData.append('file', file)

    try {

      const response = await axios.post(
        'http://127.0.0.1:5000/upload-report',
        formData
      )

      setExtractedText(response.data.extracted_text)

      setAnalysis(response.data.analysis)

    } catch (error) {

      console.log(error)
    }

    setLoading(false)
  }

  return (

    <div className="max-w-4xl mx-auto mt-10 bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-blue-100">

      <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">

        Upload Medical Report

      </h2>

      <div className="flex flex-col gap-6">

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg"
        />

        <button
          onClick={handleUpload}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition transform duration-300 text-white py-4 rounded-2xl text-xl font-semibold shadow-lg"
        >

          {
            loading
              ? 'Analyzing...'
              : 'Upload & Analyze'
          }

        </button>

      </div>

    </div>
  )
}