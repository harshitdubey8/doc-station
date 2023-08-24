import React, { useState } from "react";
import EditorComponent from "../components/EditorComponent";
import DocsSections from "../components/DocsSections";

const HomeScreen = () => {
  const [notes, setNotes] = useState([]);
  const [editingData, setEditingData] = useState(null);
  //logic part
  const NotesHandler = (data) => {
    setNotes((prev) => [...prev, data]);
  };

  const handlerHeadingClick = (data) => {
    setEditingData(data);
    console.log("clicked");
  };

  return (
    <div>
      <EditorComponent notesHandler={NotesHandler} editingData={editingData} />
      <DocsSections handlerHeadingClick={handlerHeadingClick} docs={notes} />

      {/* {notes && (
        <div>
          <h2>Saved Data:</h2>

          <pre>{JSON.stringify(notes, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};

export default HomeScreen;
