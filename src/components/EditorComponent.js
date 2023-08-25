import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

import "./css/EditorComponent.css";

const EditorComponent = ({ notesHandler, editingData }) => {
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
      data: editingData ? editingData : undefined, // Provide the editing data if available
      config: {
        placeholder: "Enter a header",
        levels: [2, 3, 4],
        defaultLevel: 3,
      },
    });

    return () => {
      // Destroy the editor instance when the component unmounts
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, [editingData]);
  const handleSave = async () => {
    if (editorRef.current) {
      const data = await editorRef.current.save();

      // Prompt the user for confirmation
      const shouldCreateNewDoc = window.confirm(
        "Do you want to create a new document?"
      );

      if (shouldCreateNewDoc) {
        // Create a new document
        notesHandler({
          time: Date.now(),
          blocks: data.blocks,
          version: "2.27.2",
        });
      } else {
        // Update the existing data
        notesHandler({ ...editingData, blocks: data.blocks });
      }
    }
  };

  return (
    <div className="editorComponentContainer">
      <div id="editorjs-container">
        {/* The editor will be rendered here */}
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditorComponent;
