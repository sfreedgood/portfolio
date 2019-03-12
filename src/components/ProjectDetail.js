import React from "react"

const ProjectDetail = (props) => {
  
  return(
      <div className="project-container">
        <h3 className="project-title">{props.projectInfo.title}</h3>
        <div className="project-info">
          <img src={props.projectInfo.img} alt="" className="project-img"/>
          <p className="project-description">
          {props.projectInfo.description}
          </p>
          <a href={props.projectInfo.url} target={"_blank"}
          className="project-link">View Project</a>
        </div>
      </div>
  )
}

export default ProjectDetail