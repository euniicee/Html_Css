import React, { useMemo } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

marked.setOptions({ gfm: true, breaks: true })

export default function Preview({ markdown }) {
  const html = useMemo(() => {
    try {
      return DOMPurify.sanitize(marked.parse(markdown || ''))
    } catch {
      return '<p><em>Render error</em></p>'
    }
  }, [markdown])

  return (
    <section aria-label="Preview" className="bg-white p-3 rounded shadow overflow-auto h-96">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-medium">Preview</h2>
        <div className="text-xs text-gray-500">Rendered HTML</div>
      </div>
      <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}