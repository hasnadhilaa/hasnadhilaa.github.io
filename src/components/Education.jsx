import React from "react";
import { educationData } from "../data/constants";

function Education() {
  return (
    <div id="education" className="education-container container">
      <h2 className="title">Education</h2>
      <div className="center-line"></div>

      {educationData.map((item, index) => (
        <div
          className={`row ${index % 2 === 0 ? "first" : "second"}`}
          key={index}
        >
          <section>
            <img src={item.iconUrl} alt="icon" className="icon" />
            <div className="details">
              <span className="title">{item.title}</span>
              <span>{item.date}</span>
            </div>
            <h4>{item.institution}</h4>
            <p>{item.description}</p>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Education;
