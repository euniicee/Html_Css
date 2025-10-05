# Markdown Preview Application

A responsive, accessible **Markdown Preview App** built with **React 19**, **Vite**, and **Tailwind CSS**.  
It features a live Markdown editor with real-time preview, file operations, and optional API persistence.

---

## Features

### Core Functionality
- **Live Markdown Input & Preview:** Type Markdown on the left and see instant HTML rendering on the right.
- **Real-time Rendering:** Automatically updates as you type.
- **Common Markdown Support:** Headings, paragraphs, lists, bold/italic, links, images, and code blocks.
- **Responsive Design:** Side-by-side layout on desktop, stacked on mobile.

### Additional Features
- **File Operations:** Upload and download `.md` files.
- **API Integration:** Save and load Markdown content from a mock API.
- **Local Storage Persistence:** Automatically saves your last Markdown content.
- **Error Handling:** Custom ErrorBoundary and 404 Page; `/error-test` route.
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation.

---

## Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | React 19 (Vite) |
| Markdown Parser | Marked.js + DOMPurify |
| Code Editor | @uiw/react-codemirror + @codemirror/lang-markdown |
| Styling | Tailwind CSS |
| Icons | React Icons |
| Routing | React Router DOM |
| Build Tool | Vite |
| API (Mock) | JSONPlaceholder |

---

## Folder Structure

Alt-Exam/
├─ public/  
├─ src/  
│  ├─ assets/screenshots/  
│  ├─ components/ (Editor.jsx, Preview.jsx, ErrorBoundary.jsx)  
│  ├─ pages/ (Home.jsx, ErrorTest.jsx, NotFound.jsx)  
│  ├─ utils/ (download.js, api.js)  
│  ├─ App.jsx  
│  ├─ main.jsx  
│  └─ index.css  
├─ package.json  
├─ vite.config.js  
└─ README.md  

---

## Installation & Setup

```bash
git clone <https://github.com/euniicee/Alt_Exam.git>
cd Alt-Exam
npm install
npm run dev

Available Scripts
	•	npm run dev – start dev server
	•	npm run build – build for production
	•	npm run preview – preview production build

  Known Issues
	•	Mobile layout stacking issue (editor and preview are not horizontal on some screens)
	•	Large Markdown files can have a slight rendering delay
	•	Some components might throw warnings with unusual Markdown syntax

Future Improvements
	•	Dark mode toggle
	•	Real-time collaboration
	•	Enhanced API integration for saving/loading Markdown content
	•	File drag-and-drop support


Screenshots
  (`./src/assests/sscrenshot1.png`)

