import React from "react";
import { skills } from "../data/constants";

function Skills() {
  return (
    <div id="skills" className="skills-container container">
      <div className="skills-wrapper">
        <h2 className="title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-items">
                {skill.skills.map((item, idx) => (
                  <div key={idx} className="skill-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="skill-icon"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
