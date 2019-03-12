import React from "react"
import ProjectDetail from "./ProjectDetail";
import projectData from "../projectData"

const Projects = () => {
  const projects = projectData.map((el, key) => {
    return <ProjectDetail key={key} projectInfo={el} />
  })

  return(
    <div id={"projects"}>
      <div className="section-container">
        <h1>I am the Projects page</h1>
        {projects}
      </div>
    </div>
  )
}

export default Projects