import React from "react";
import githubLogo from "../../images/github-white.png";
import webLogo from "../../images/web-white.png";

const Project = (props) => {
  return (
    <div>
      <div className="container inline-block">
        <img src={props.imgLink} className="work-picture"></img>
        <h1 className="picture-text">{props.projectTitle}</h1>
        <a className="github-text" href={props.githubLink} target="_blank">
          <img src={githubLogo} width="50" height="50"></img>
        </a>
        <a className="link-text" href={props.link} target="_blank">
          <img src={webLogo} width="50" height="50"></img>
        </a>
      </div>
    </div>
  );
};

export default Project;
