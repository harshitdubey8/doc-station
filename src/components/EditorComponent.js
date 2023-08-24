import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";

const EditorComponent = () => {
  const [data, setData] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current = new EditorJS({
      // The holder property is where the editor will be rendered
      holder: "editorjs-container",

      tools: {
        header: {
          class: require("@editorjs/header"),
        },
        list: {
          class: require("@editorjs/list"),
        },
        link: {
          class: require("@editorjs/link"),
        },
        image: {
          class: require("@editorjs/simple-image"),
        },
        checkList: {
          class: require("@editorjs/checklist"),
        },
        Quote: {
          class: require("@editorjs/quote"),
          inlineToolbar: true,
          shortcut: "CTRL+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
      },
    });

    return () => {
      // Destroy the editor instance when the component unmounts
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, []);
  const handleSave = async () => {
    if (editorRef.current) {
      const data = await editorRef.current.save();
      setData(data);
    }
  };

  return (
    <div>
      <div id="editorjs-container">
        {/* The editor will be rendered here */}
      </div>
      <button onClick={handleSave}>Save</button>

      {data && (
        <div>
          <h2>Saved Data:</h2>

          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default EditorComponent;