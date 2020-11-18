import React from "react";

import { Row } from "antd";

import { SKILLS } from "../../utils/constants";
import SkillsBar from "./skillsBar";

const SkillsPage = () => {
  return (
    <div className="skills">
      <h3>Front-end development skills</h3>
      <div className="skills__grid">
        <div className="skill__description">
          Minim duis id exercitation ullamco duis velit nostrud. Eu deserunt
          Lorem non id ipsum ullamco aute. Aute elit tempor excepteur anim
          exercitation. Aute ad aliqua proident irure culpa non ut enim
          reprehenderit consectetur ea ea duis.
        </div>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{
            width: "100%",
            marginLeft: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {SKILLS.map((obj) => {
            return <SkillsBar obj={obj} key={obj.name} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default SkillsPage;
