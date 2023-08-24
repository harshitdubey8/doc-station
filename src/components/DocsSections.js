import React from "react";
import "./css/DocsSection.css";
import DocsCard from "../UI/DocsCard";

const DocsSections = ({ docs, handlerHeadingClick }) => {
  return (
    <div className="docsSectionContainer">
      <h3> All Docs </h3>
      <ul>
        {docs.map((dataObject, index) => (
          <DocsCard key={index}>
            {dataObject.blocks.find(
              (block) =>
                block.type === "header" && block.data && block.data.text
            ) && (
              <p onClick={() => handlerHeadingClick(dataObject)} key={index}>
                {
                  dataObject.blocks.find(
                    (block) =>
                      block.type === "header" && block.data && block.data.text
                  ).data.text
                }
              </p>
            )}
          </DocsCard>
        ))}
      </ul>
    </div>
  );
};

export default DocsSections;
