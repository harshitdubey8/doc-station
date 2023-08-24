import React, { useState } from "react";
import EditorComponent from "../components/EditorComponent";
import DocsSections from "../components/DocsSections";

import "./HomeScreen.css";
import WelcomeComponent from "../components/WelcomeComponent";

const HomeScreen = () => {
  const [notes, setNotes] = useState([]);
  const [editingData, setEditingData] = useState(null);
  //logic part
  const NotesHandler = (newData) => {
    const newDataIndex = notes.findIndex((data) => data.time === newData.time);
    if (newDataIndex !== -1) {
      // Update the existing object
      const updatedData = [...notes];
      updatedData[newDataIndex] = newData;
      setNotes(updatedData);
    } else {
      // Add a new object
      setNotes([...notes, newData]);
    }

    setEditingData(null);
  };

  const handlerHeadingClick = (data) => {
    setEditingData(data);
    console.log("clicked");
  };

  return (
    <div className="homeScreenContainer">
      <WelcomeComponent />

      <DocsSections handlerHeadingClick={handlerHeadingClick} docs={notes} />

      <EditorComponent notesHandler={NotesHandler} editingData={editingData} />
    </div>
  );
};

export default HomeScreen;
