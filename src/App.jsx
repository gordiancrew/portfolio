import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ProjectInfo from "./components/ProjectInfo";
import { useState } from "react";

function App() {
  const[project,setProject]=useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects  setProject={setProject}/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/info" element={<ProjectInfo project={project}/>} />
      </Routes>
    </>
  );
}

export default App;
