import React from "react"
import ProjectDetail from "./ProjectDetail";
import projectData from "./projectData"

const Projects = () => {
  const projects = projectData.map((el, key) => {
    return <ProjectDetail key={key} projectInfo={el} />
  })

  return(
    <div id={"projects"}>
      <div className="dark-primary-color section-container">
        <h1>Projects</h1>
        {projects}
      </div>
    </div>
  )
}

export default Projects