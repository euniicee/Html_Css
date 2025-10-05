import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorTest from "./pages/ErrorTest";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <nav className="bg-white shadow-sm">
                <div className="w-full px-4 py-3 flex items-center justify-between">          <Link to="/" className="text-lg font-semibold">Markdown Preview</Link>
          <div className="flex gap-4">
            <Link to="/" className="text-sm hover:underline">Editor</Link>
            <Link to="/error-test" className="text-sm text-red-600 hover:underline">Error Test</Link>
          </div>
        </div>
      </nav>

            <main className="flex-1 w-full p-4">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/error-test" element={<ErrorTest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>

      <footer className="bg-white border-t text-sm text-center py-3">
        Built with React • Accessible • Responsive
      </footer>
    </div>
  )
}