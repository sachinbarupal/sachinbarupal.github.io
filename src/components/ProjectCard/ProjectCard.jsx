import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import { Fade } from "react-awesome-reveal";

export default function ProjectCard({ repo, theme }) {
  // console.log(repo);
  // function openRepoinNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }

  return (
    <div
      className={
        theme.name === "light" ? "project-card light" : "project-card dark"
      }
    >
      <div>
        <div className="repo-name-div">
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>
        <p className="repo-description" style={{ color: theme.text }}>
          {repo.description}
        </p>
      </div>
      <div className="flexDiv">
        <div className="repo-details Leftitem">
          <ProjectLanguages logos={repo.languages} />
        </div>
        <div className="repo-details Rightitem">
          <ProjectLinks logos={repo.links} />
        </div>
      </div>
    </div>
  );
}
