import "./Projects.css";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { projectsHeader, projects } from "../../portfolio.js";
import ProjectsImg from "./ProjectsImg.jsx";
import { useRecoilValue } from "recoil";
import { themeSelector } from "../../recoil/themeAtom.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, 30px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function CustomAnimation({ children }) {
  return (
    <Reveal duration={1500} triggerOnce keyframes={customAnimation}>
      {children}
    </Reveal>
  );
}

function Projects() {
  const theme = useRecoilValue(themeSelector);

  return (
    <>
      <Header />
      <div className="projects-main">
        <div className="basic-projects">
          <CustomAnimation triggerOnce>
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </CustomAnimation>
        </div>
        <div className="repo-cards-div-main">
          {projects.map((repo) => {
            return <ProjectCard key={repo.id} repo={repo} theme={theme} />;
          })}
        </div>
        <br />
        <br />
        <br />
        <a
          className="general-btn"
          href="https://github.com/sachinbarupal?tab=repositories"
        >
          More Projects (Github)
        </a>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
