import React from "react"

const scribblrImg = require("../assets/Scribblr.png")
const zaruttoImg = require("../assets/Zarutto.png")
const pickAParkImg = require("../assets/PickAPark.png")

const ProjectDetail = (props) => {

  const getImg = (img) => {
    const targetUrl = img
    switch (targetUrl) {
      case 'Scribblr':
        return scribblrImg
      case 'Zarutto':
        return zaruttoImg
      case 'PickAPark':
        return pickAParkImg
      default:
        return null
    }
  }

  return(
      <div className="default-primary-color project-container">
        <div className="info-container">
          <img src={getImg(props.projectInfo.img)} alt="" className="project-img"/>
          <div className="project-info">
          <h3 className="project-title">{props.projectInfo.title}</h3>
            <p className="project-description">
            {props.projectInfo.description}
            </p>
            <a href={props.projectInfo.url} target={"_blank"}
            className="accent-color project-link">View Project</a>
          </div>
        </div>
      </div>
  )
}

export default ProjectDetail