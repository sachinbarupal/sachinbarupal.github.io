import "./ProjectCard.css";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, 40px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function CustomAnimation({ children }) {
  return (
    <Reveal triggerOnce keyframes={customAnimation}>
      {children}
    </Reveal>
  );
}

export default function ProjectCard({ repo, theme }) {
  return (
    <CustomAnimation>
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
    </CustomAnimation>
  );
}
