import React, { Component } from "react";
import classNames from "classnames";
import projectsData from "./projectsData";
import "../styles/projectsMenu.css";

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }

  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };

  renderContent = (projectsData) => {
    return projectsData.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title}></img>
        <div>{project.description}</div>
        <div className="link-container">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            CODE
          </a>
        </div>
      </div>
    ));
  };

  render() {
    const { activeProject } = this.state;
    const projectItems = [
      "Responsive Dashboard",
      // "Project 2: TBD",
      // "Project 3: TBD",
    ];

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index + 1,
              })}
              onClick={() => this.handleProjectClick(index + 1)}
            >
              <h2 className="title">{item}</h2>
            </div>
          ))}
        </div>
        <div className="project-sub-container">
          {this.renderContent([projectsData[activeProject]])}
        </div>
      </div>
    );
  }
}
