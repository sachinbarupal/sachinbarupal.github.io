import "./Projects.css";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { projectsHeader, projects } from "../../portfolio.js";
import ProjectsImg from "./ProjectsImg.jsx";
import { useRecoilValue } from "recoil";
import { themeSelector } from "../../recoil/themeAtom.js";
import { Fade } from "react-awesome-reveal";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
function Projects() {
  const theme = useRecoilValue(themeSelector);

  // const styles = style({
  //
  // });

  return (
    <>
      <Header />
      <div className="projects-main">
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
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
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {projects.data.map((repo) => {
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
