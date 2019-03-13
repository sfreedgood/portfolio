import React from "react"

const scribblrImg = require("../assets/Scribblr.png")
const zaruttoImg = require("../assets/Zarutto.png")
// const pickAPark = require("../assets/PickAPark.png")

const ProjectDetail = (props) => {
  // for loop to compare img string against variable name
  // check to see if better way to require imgs in use case
  const getImg = (img) => {
    const targetUrl = img
    switch (targetUrl) {
      case 'Scribblr':
        return scribblrImg
      case 'Zarutto':
        return zaruttoImg
      // case 'PickAPark':
      //   return pickAPark
      //   break
      default:
        return null
    }
  }

  return(
      <div className="project-container">
        <h3 className="project-title">{props.projectInfo.title}</h3>
        <div className="info-container">
          <img src={getImg(props.projectInfo.img)} alt="" className="project-img"/>
          <div className="project-info">
            <p className="project-description">
            {props.projectInfo.description}
            </p>
            <a href={props.projectInfo.url} target={"_blank"}
            className="project-link">View Project</a>
          </div>
        </div>
      </div>
  )
}

export default ProjectDetail