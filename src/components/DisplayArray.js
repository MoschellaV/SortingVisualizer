import React from "react";
import "../css/DisplayArray.css";

export const DisplayArray = ({ sortArray, determineWidth }) => {
  return (
    <div id="array" className="array-container">
      {sortArray.map((value, index) => (
        <div
          key={index}
          className="bar"
          value={value}
          style={{ height: `${value}px`, width: determineWidth() }}
        ></div>
      ))}
    </div>
  );
};
