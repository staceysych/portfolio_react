import React, {useState} from "react";

import { Row } from "antd";

import { SKILLS } from "../../utils/constants";
import SkillsBar from "./skillsBar";
import SkillsDescription from './skillsDescription';

const SkillsPage = () => {
  const [skillId, setSkillId] = useState('');
  return (
    <div className="skills">
      <h3>Front-end development skills</h3>
      <div className="skills__grid">
        <SkillsDescription id={skillId} />
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
            return <SkillsBar obj={obj} key={obj.name} setSkillId={setSkillId} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default SkillsPage;
