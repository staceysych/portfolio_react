import React from "react";

import { Row, Col, Progress } from "antd";

const columnStyle = {
    background: "white",
    padding: "8px 10px",
    fontSize: "1.2rem",
    display: "flex",
  };

const SkillsBar = ({ obj }) => {
  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      justify="center"
      align="middle"
    >
      <Col className="gutter-row" span={8}>
        <div style={columnStyle}>{obj.name}</div>
      </Col>
      <Col className="gutter-row" span={15}>
        <div style={columnStyle}>
          <Progress
            percent={obj.percent}
            status="active"
            strokeColor={{
              "0%": obj.color1,
              "100%": obj.color2,
            }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default SkillsBar;
