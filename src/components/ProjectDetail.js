import React from "react"

const scribblrImg = require("../assets/Scribblr.png")
const zaruttoImg = require("../assets/Zarutto.png")
const pickAParkImg = require("../assets/PickAPark.png")
const gitHubLogo = require("../assets/github-free-icon-512.png")
const externalLinkLogo = require("../assets/external_link.png")

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
            <div className="project-link-container">
              <a href={props.projectInfo.url} 
                target={"_blank"}>
                <div className="accent-color project-link">
                    <img className="media-logo"
                        src={externalLinkLogo}
                        alt="github">
                    </img>
                    View Project
                </div>
              </a>

              <a href = "http://github.com/sfreedgood"
                target={"_blank"}>
                <div className="accent-color project-link">
                  <img className="media-logo"
                      src={gitHubLogo}
                      alt="github">
                  </img>
                  View Code
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectDetail