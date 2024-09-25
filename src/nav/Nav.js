import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import aboutImg from "../assets/shield-solid2.png";
import skillsImg from "../assets/rocket-solid2.png";
import projectsImg from "../assets/folder-open-solid2.png";
import contactImg from "../assets/comment-solid2.png";
// import aboutImg from "../assets/stock/astronaut-helmet.png";
// import skillsImg from "../assets/stock/dead-eye.png";
// import projectsImg from "../assets/stock/stack.png";
// import contactImg from "../assets/stock/envelope.png";

import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link-current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink("/", aboutImg, "About Me icon", "nav-about")}
      {renderNavLink("/skills", skillsImg, "Skills icon", "nav-skills")}
      {renderNavLink("/projects", projectsImg, "Projects icon", "nav-projects")}
      {renderNavLink("/contact", contactImg, "Contact Me icon", "nav-contact")}
    </nav>
  );
}
