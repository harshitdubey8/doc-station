import React from "react";

import "./DocsCard.css";

const DocsCard = (props) => {
  return (
    <div className="docsCardContainer">
      <h3 className="headingText"> {props.children}</h3>
    </div>
  );
};

export default DocsCard;
