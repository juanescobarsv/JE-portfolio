import React, { Component } from "react";
import Avatar from "../Avatar/Avatar.js";
import SkillsMenu from "./skillsMenu.js";

export default class Skills extends Component {
  render() {
    return (
      <>
        <Avatar page="skills" />
        <SkillsMenu />
      </>
    );
  }
}
