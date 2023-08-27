import Header from "./utils/Header";
import "./Projects.css";

function Projects() {
  return (
    <>
      <Header />
      <div className="projects">
        <div className="project">
          <div className="project-frame"></div>
          <div className="project-info"></div>
        </div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
      </div>
    </>
  );
}

export default Projects;
