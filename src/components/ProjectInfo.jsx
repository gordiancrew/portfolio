import Footer from "./utils/Footer";
import Header from "./utils/Header";
import "./Info.css";
import { projectData } from "../data/ProjectData";

function ProjectInfo(props) {
  return (
    <>
      <Header />
      <Footer />
      <div className="content">
        <div className="box-image">
          <img className="image" src={projectData[props.project].img} />
        </div>
        <div className="box-description"></div>
        
      </div>
      <div className="box-info"><div>jjhjhjhhjh</div> <div>jjhjhjhhjh</div></div>
    </>
  );
}

export default ProjectInfo;
