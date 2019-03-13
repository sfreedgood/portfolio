import React from "react"
import projectData from "../projectData"

const scribblrImg = projectData[0].img
const zaruttoImg = projectData[2].img

const ProjectDetail = (props) => {
  console.log("../assets/Scribblr.png")
  return(
      <div className="project-container">
        <h3 className="project-title">{props.projectInfo.title}</h3>
        <img src={scribblrImg} alt=""/>
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