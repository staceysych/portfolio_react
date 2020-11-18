import React from "react";

const LabBeaker = ({ col, height, isAnimationOn }) => {
  return (
    <div
      className="beaker"
      style={{
        animation: isAnimationOn
          ? "rotate 1s ease-in-out alternate infinite -1s"
          : "none",
      }}
    >
      <div
        className="water color"
        style={{
          backgroundColor: col,
          height,
          animation: isAnimationOn
            ? "slosh 1s ease-in-out alternate infinite -0.8s"
            : "none",
        }}
      >
        <ul className="bubbles">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default LabBeaker;
