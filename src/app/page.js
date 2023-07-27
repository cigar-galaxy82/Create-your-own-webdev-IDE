"use client";
import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import { faPlay, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const files = {
  "index.html": {
    name: "index.html",
    language: "html",
    value: "",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "",
  },
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: "",
  },
};

export default function Home() {
  const [fileName, setFileName] = useState("index.html");
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  function handleEditorChange(value) {
    file.value = value;
  }

  const file = files[fileName];

  useEffect(() => {
    const runBtn = document.getElementById("runCode");
    const clsBtn = document.getElementById("closeWindow");
    runBtn?.addEventListener("click", () => { 
      setHtmlCode(files["index.html"].value);
      setCssCode(files["style.css"].value);
      setJsCode(files["script.js"].value);
      document.getElementById("outputWindow").style.display = "block";
    });

    clsBtn?.addEventListener("click", () => {
      document.getElementById("outputWindow").style.display = "none";
    });
  }, []);

  return (
    <>
      <div>
        <div className={styles.topBar}>
          <button
            className={styles.htmlButton}
            disabled={fileName === "index.html"}
            onClick={() => setFileName("index.html")}
          >
            <div>
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            index.html
          </button>
          <button
            className={styles.cssButton}
            disabled={fileName === "style.css"}
            onClick={() => setFileName("style.css")}
          >
            <div>
              <FontAwesomeIcon icon={faCss3} />
            </div>
            style.css
          </button>
          <button
            className={styles.jsButton}
            disabled={fileName === "script.js"}
            onClick={() => setFileName("script.js")}
          >
            <div>
              <FontAwesomeIcon icon={faJs} />
            </div>{" "}
            script.js
          </button>
          <button className={styles.playButton} id="runCode">
            <div>
              <FontAwesomeIcon icon={faPlay} />
            </div>{" "}
            Run
          </button>
        </div>
        <Editor
          height="100vh"
          theme="vs-dark"
          saveViewState={true}
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          onChange={handleEditorChange}
          value={file.value}
        />
      </div>
      <div className={styles.websiteWindow} id="outputWindow">
        <div className={styles.buttonBlock}>
          <button className={styles.closeButton} id="closeWindow">
            <div>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </button>
        </div>
        <iframe
          title="output"
          srcDoc={`
  <html>
    <body>${htmlCode}</body>
    <style>${cssCode}</style>
    <script>${jsCode}</script>
  </html>
`}
          className={styles.outputiframewindow}
        />
      </div>
    </>
  );
}
