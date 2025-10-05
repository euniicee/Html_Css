import React, { useEffect, useState } from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import { saveToApi, loadFromApi } from "../utils/api";

const STORAGE_KEY = "md_preview_content_v1";

export default function Home() {
  const [content, setContent] = useState(
    () => localStorage.getItem(STORAGE_KEY) || sample
  );
  const [loadingSave, setLoadingSave] = useState(false);
  const [savedId, setSavedId] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, content);
  }, [content]);

  async function handleSaveToApi() {
    setLoadingSave(true);
    try {
      const res = await saveToApi({ title: "Saved Markdown", body: content });
      setSavedId(res.id);
    } catch (err) {
      alert("Save failed: " + err.message);
    } finally {
      setLoadingSave(false);
    }
  }

  async function handleLoadFromApi(id) {
    try {
      const post = await loadFromApi(id);
      if (post?.body) setContent(post.body);
    } catch (err) {
      alert("Load failed: " + err.message);
    }
  }

  return (
    <section
      aria-labelledby="main-heading"
      className="flex flex-row  w-full h-[600px] gap-4"
    >
      <h1 id="main-heading" className="sr-only">
        Markdown Editor
      </h1>

      <div className="flex-1 h-full overflow-auto">
        <Editor value={content} onChange={setContent} />

        <div className="mt-3 flex gap-2 flexwhat sho wrap">
          <button
            onClick={() => downloadFile(content)}
            className="px-3 py-2 rounded bg-sky-600 text-white"
          >
            Download .md
          </button>

          <label className="px-3 py-2 rounded bg-gray-200 cursor-pointer">
            Upload .md
            <input
              type="file"
              accept=".md, text/markdown, .txt"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                const reader = new FileReader();
                reader.onload = () => setContent(String(reader.result));
                reader.readAsText(f);
              }}
            />
          </label>

          <button
            onClick={handleSaveToApi}
            disabled={loadingSave}
            className="px-3 py-2 rounded bg-emerald-600 text-white"
          >
            {loadingSave ? "Saving..." : "Save to API"}
          </button>

          <input
            placeholder="Load ID (jsonplaceholder)"
            type="number"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLoadFromApi(Number(e.target.value));
            }}
            className="px-2 py-2 border rounded"
          />
        </div>

        <div className="mt-2 text-sm text-gray-600">
          Saved remote ID: {savedId ?? "—"}
        </div>
      </div>

      <div className="flex-1 h-full overflow-auto">
        <Preview markdown={content} />
      </div>
    </section>
  );
}

const sample = `# Welcome

This is a *live* **Markdown** preview app.

- Type in the editor on the left
- See the preview update in real time

\`console.log('code block')\`

> Accessible and responsive.`;

function downloadFile(text) {
  const blob = new Blob([text], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "document.md";
  a.click();
  URL.revokeObjectURL(url);
}
