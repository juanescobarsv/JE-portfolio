import React, { Component } from "react";
import Avatar from "../Avatar/avatar.js";
import AboutMenu from "./aboutMenu.js";

export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="about" />
        <AboutMenu />
      </>
    );
  }
}
