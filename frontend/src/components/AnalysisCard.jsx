export default function AnalysisCard({ extractedText, aiAnalysis }) {

  return (
    <div className="card">

      <h2>Extracted Report Text</h2>

      <textarea
        value={extractedText}
        readOnly
      />

      <h2>AI Analysis</h2>

      <textarea
        value={aiAnalysis}
        readOnly
      />

    </div>
  )
}