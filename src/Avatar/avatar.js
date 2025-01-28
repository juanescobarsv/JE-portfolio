import React from "react";
import PropTypes from "prop-types";
import avatarImg from "../assets/My-avatar.png";
import "../styles/avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImg} className={avatarClass} alt="My Avatar" />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;
