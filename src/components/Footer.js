import React from "react";
import githubLogo from "../images/github.png";
import linkedInLogo from "../images/linkedIn.png";

const Footer = () => {
  return (
    <div>
      <footer className="flex items-center justify-center py-5 space-x-5">
        <a href="https://github.com/amerkulovic" target="_blank">
          <img src={githubLogo} width="50" height="50"></img>
        </a>
        <a href="https://www.linkedin.com/in/amer-kulovic/" target="_blank">
          <img src={linkedInLogo} width="50" height="50"></img>
        </a>
      </footer>
    </div>
  );
};
export default Footer;
