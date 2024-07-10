import React from "react";
import {BrowseRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./nav/Nav.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  return (
    <>
      <Nav />
      <FontAwesomeIcon icon="fa-solid fa-layer-group" style={{color: "#ffffff",}} />
      <FontAwesomeIcon icon="fa-solid fa-layer-group" style={{color: "#74C0FC",}} />
    </>
  );
}

export default App;
