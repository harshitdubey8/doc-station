import React from "react";
import "./css/DocsSection.css";
import DocsCard from "../UI/DocsCard";

import DeleteIcon from "@mui/icons-material/Delete";

const DocsSections = ({ docs, handlerHeadingClick, deleteDocHandler }) => {
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
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <p onClick={() => handlerHeadingClick(dataObject)} key={index}>
                  {
                    dataObject.blocks.find(
                      (block) =>
                        block.type === "header" && block.data && block.data.text
                    ).data.text
                  }
                </p>
                <button
                  onClick={() => deleteDocHandler(dataObject)}
                  className="deleteButton"
                >
                  <DeleteIcon />
                </button>
              </div>
            )}
          </DocsCard>
        ))}
      </ul>
    </div>
  );
};

export default DocsSections;
