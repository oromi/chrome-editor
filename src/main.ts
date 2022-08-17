import "./style.css";
import * as monaco from "monaco-editor";

const app = document.querySelector<HTMLDivElement>("#app")!;
monaco.editor.create(app, {
  autoIndent: "full",
  automaticLayout: true,
  fontSize: 18,
  language: "markdown",
  lineDecorationsWidth: 0,
  lineHeight: 1.6,
  minimap: { enabled: false },
  padding: { bottom: 16, top: 16 },
  quickSuggestions: false,
  wordWrap: "on",
  theme:"vs-dark"
});