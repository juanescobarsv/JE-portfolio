import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./About/About.js";
import Skills from "./Skills/Skills.js";
import Projects from "./Projects/Projects.js";
import Contact from "./Contact/Contact.js";
import "./styles/app.css";
import Background from "./Background/Background.js";
import CV from "./Title/Title.js";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CV />
    </Router>
  );
};

export default App;
