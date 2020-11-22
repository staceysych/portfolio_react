import React, { useState } from "react";

import { Col, Tooltip } from "antd";

import LabBeaker from "./skillsBeaker";

const columnStyle = { display: "flex", height: 70 };

const SkillsBar = ({ obj, setSkillId }) => {
  const [isAnimationOn, setAnimationOn] = useState(false);

  const handleMouseOver = () => {
    setAnimationOn(true);
  };

  const handleMouseOut = () => {
    setAnimationOn(false);
  };

  const handleClick = (id) => {
    setSkillId(id);
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
            id={obj.id}
            src={obj.url}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(obj.id)}
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
