import React from "react";

import { SKILLS } from "../../utils/constants";
import SkillsBar from "./skillsBar";

const SkillsPage = () => {
  return (
    <div className="skills">
      <h3>Front-end development skills</h3>
      <div className="skills__grid">
        {SKILLS.map((obj) => {
          return <SkillsBar obj={obj} key={obj.name} />;
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
