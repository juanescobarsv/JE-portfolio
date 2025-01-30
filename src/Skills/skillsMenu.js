import React, { Component } from "react";
import "../styles/skillsMenu.css";
import classNames from "classnames";
import SkillsData from "./skillsData";
import frontEndIcon from "../assets/stock/eagle-emblem.png";
import softSkillsIcon from "../assets/stock/hawk-emblem.png";

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    });
  };

  renderContent = (SkillsData) => {
    return SkillsData.map((skill, index) => (
      <div
        key={index}
        className={`skill-sub-container-${this.state.activeMenuItem}`}
      >
        <h3>{skill.title}</h3>
        <div className="skill-sub-container-${this.state.activeMenuItem}">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i < skill.level ? "filled" : "unfilled"
              }`}
            ></div>
          ))}
        </div>
      </div>
    ));
  };

  render() {
    const { activeMenuItem } = this.state;
    const menuItems = ["FRONT-END SKILLS", "SOFT SKILLS"];

    const currentIcon = activeMenuItem === 1 ? frontEndIcon : softSkillsIcon;

    return (
      <div className="skill-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={classNames("skill-item", {
              activeSkill: activeMenuItem === index + 1,
            })}
            onClick={() => this.handleMenuItemClick(index + 1)}
          >
            <h2 className="skill-title">{item}</h2>
          </div>
        ))}
        <img className="skill-icon" src={currentIcon} alt="Current Skill" />
        <div className="skill-sub-container">
          {this.renderContent(SkillsData[activeMenuItem])}
        </div>
      </div>
    );
  }
}
