import { useState } from 'react'

import Navbar from '../components/Navbar'
import UploadForm from '../components/UploadForm'
import AnalysisCard from '../components/AnalysisCard'

export default function Home() {

  const [extractedText, setExtractedText] = useState('')

  const [analysis, setAnalysis] = useState('')

  return (

    <div>

      <Navbar />

      <UploadForm
        setExtractedText={setExtractedText}
        setAnalysis={setAnalysis}
      />

      <AnalysisCard
        extractedText={extractedText}
        analysis={analysis}
      />

    </div>
  )
}