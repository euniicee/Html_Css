import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { markdown } from '@codemirror/lang-markdown'

export default function Editor({ value, onChange }) {
  return (
        <section aria-label="Markdown editor" className="bg-white p-3 rounded shadow flex flex-col flex-1 h-full">
          <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium">Editor</h2>
        <div className="text-xs text-gray-500">Syntax highlighted</div>
      </div>

            <div className="flex-1 overflow-auto">
        <CodeMirror
          value={value}
          height="100%"
          extensions={[markdown()]}
          theme="light"
          onChange={(val) => onChange(val)}
        />
      </div>
    </section>
  )
}