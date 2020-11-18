import React, { useState } from "react";

import { Col, Tooltip } from "antd";

import LabBeaker from "./skillsBeaker";

const columnStyle = { display: "flex", height: 70 };

const SkillsBar = ({ obj }) => {
  const [isAnimationOn, setAnimationOn] = useState(false);
  const handleMouseOver = () => {
    setAnimationOn(true);
  };
  const handleMouseOut = () => {
    setAnimationOn(false);
  };
  return (
    <Col className="gutter-row" span={4}>
      <div style={columnStyle}>
        <Tooltip title="Click me">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              cursor: "pointer",
            }}
            src={obj.url}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </Tooltip>
      </div>
      <div>
        <LabBeaker
          col={obj.color}
          height={obj.height}
          isAnimationOn={isAnimationOn}
        />
      </div>
    </Col>
  );
};

export default SkillsBar;
