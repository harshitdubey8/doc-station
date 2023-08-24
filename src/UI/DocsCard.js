import React from "react";

const DocsCard = ({ item }) => {
  return (
    <div className="docsCardContainer">
      <h2>{item.time}</h2>
    </div>
  );
};

export default DocsCard;
