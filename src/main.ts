import './style.css'
import * as monaco from "monaco-editor";
const app = document.querySelector<HTMLDivElement>('#app')!
const editor = monaco.editor.create(app, {
  fontSize: 18,
  language: "markdown",
  lineHeight: 1.6,
  minimap: { enabled: false },
  padding: { bottom: 16, top: 16},
  theme:"vs-dark"
});

editor.onDidChangeModelContent(() => {
  const content = editor.getValue();
});