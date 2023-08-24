import React from "react";

const DocsSections = ({ docs, handlerHeadingClick }) => {
  return (
    <div className="">
      <ul>
        {docs.map((dataObject, index) => (
          <li key={index}>
            {dataObject.blocks.map((block, blockIndex) =>
              block.type === "header" && block.data && block.data.text ? (
                <p
                  onClick={() => handlerHeadingClick(dataObject)}
                  key={blockIndex}
                >
                  {block.data.text}
                </p>
              ) : null
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocsSections;
