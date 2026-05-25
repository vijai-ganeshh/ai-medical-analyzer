import ReactMarkdown from 'react-markdown'

export default function AnalysisCard({
  extractedText,
  analysis
}) {

  return (

    <div className="max-w-5xl mx-auto mt-10 space-y-10">

      {
        extractedText && (

          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-blue-100">

            <h2 className="text-4xl font-bold text-blue-800 mb-6">

              Extracted Report Text

            </h2>

            <div className="bg-slate-50 rounded-2xl p-6 max-h-[400px] overflow-y-auto border border-slate-200">

              <pre className="whitespace-pre-wrap text-gray-700 text-lg leading-8">

                {extractedText}

              </pre>

            </div>

          </div>
        )
      }

      {
        analysis && (

          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-cyan-100">

            <h2 className="text-4xl font-bold text-cyan-700 mb-8">

              AI Medical Analysis

            </h2>

            <div className="bg-cyan-50 rounded-2xl p-8 border border-cyan-100 max-h-[600px] overflow-y-auto">

              <div className="space-y-6 text-gray-700 leading-8 text-lg">

  <ReactMarkdown
    components={{

      h1: ({ children }) => (

        <h1 className="text-3xl font-bold text-blue-700 mt-8 mb-4 border-b pb-2">

          {children}

        </h1>
      ),

      h2: ({ children }) => (

        <h2 className="text-2xl font-bold text-cyan-700 mt-6 mb-3">

          {children}

        </h2>
      ),

      li: ({ children }) => (

        <li className="bg-white rounded-2xl shadow-md p-4 mb-4 border-l-4 border-cyan-500">

          {children}

        </li>
      ),

      p: ({ children }) => (

        <p className="mb-4">

          {children}

        </p>
      ),

      strong: ({ children }) => (

        <strong className="text-red-500 font-bold">

          {children}

        </strong>
      )
    }}
  >

    {analysis}

  </ReactMarkdown>

</div>

            </div>

          </div>
        )
      }

    </div>
  )
}