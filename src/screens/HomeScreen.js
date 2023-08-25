import React, { useEffect, useState } from "react";
import EditorComponent from "../components/EditorComponent";
import DocsSections from "../components/DocsSections";

import "./HomeScreen.css";
import WelcomeComponent from "../components/WelcomeComponent";

const HomeScreen = () => {
  const [notes, setNotes] = useState([]);
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("notes"));
    if (storedData) {
      setNotes(storedData);
    }
  }, []);

  // Update local storage whenever notes are updated
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //logic part
  const NotesHandler = (newData) => {
    if (
      newData.blocks.some(
        (block) => block.type === "header" && block.data && block.data.text
      )
    ) {
      const newDataIndex = notes.findIndex(
        (data) => data.time === newData.time
      );
      if (newDataIndex !== -1) {
        const updatedData = [...notes];
        updatedData[newDataIndex] = newData;
        setNotes(updatedData);
      } else {
        setNotes([...notes, newData]);
      }

      setEditingData(null);
    }
  };

  const handlerHeadingClick = (data) => {
    setEditingData(data);
    console.log("clicked");
  };

  const handlerDeleteDoc = (dataToDelete) => {
    const updatedNotes = notes.filter(
      (data) => data.time !== dataToDelete.time
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="homeScreenContainer">
      <WelcomeComponent />

      <DocsSections
        handlerHeadingClick={handlerHeadingClick}
        docs={notes}
        deleteDocHandler={handlerDeleteDoc}
      />

      <EditorComponent notesHandler={NotesHandler} editingData={editingData} />
    </div>
  );
};

export default HomeScreen;
