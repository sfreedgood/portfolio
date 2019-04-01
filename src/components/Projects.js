import React from "react"
import ProjectDetail from "./ProjectDetail";
import projectData from "./projectData"

const Projects = () => {
  const projects = projectData.map((el, key) => {
    return <ProjectDetail key={key} projectInfo={el} />
  })

  return(
      <div id="projects" className="section-container">
        <h1 className={"default-primary-color section-title"}>Projects</h1>
        {projects}
    </div>
  )
}

export default Projects