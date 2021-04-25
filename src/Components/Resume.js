import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (!this.props.data) return null;

    
    const education = this.props.data.education.map(function(education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const experience = this.props.data.experience.map(function(experience) {
      return (
        <div key={experience.company}>
          <h3>{experience.company}</h3>
          <p className="info">
            {experience.title}
            <span>&bull;</span> <em className="date">{experience.years}</em>
          </p>
          <p>{experience.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map(function(skills) {
      return (
        <div key={skills.name}>
          <h3>{skills.name}</h3>
          
          <p>{skills.description}</p>
        </div>
      );
    });

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>
        
          <div className="nine columns main-col">{experience}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>skills</span>
            </h1>
          </div>
        
          <div className="nine columns main-col">{skills}</div>
        </div>
      </section>
    );
  }
}

export default Resume;
