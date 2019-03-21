import React from "react"

const scribblrImg = require("../assets/Scribblr.png")
const zaruttoImg = require("../assets/Zarutto.png")
const pickAParkImg = require("../assets/PickAPark.png")
const gitHubLogo = require("../assets/github-free-icon-512.png")
const externalLinkLogo = require("../assets/external_link.png")

const ProjectDetail = (props) => {

  let tech = props.projectInfo.technologies
  let techList = tech.map((el, key) => {
    return (
      <p key={key} className="tech-item">
        • {el}
      </p>
    )
  })
  
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
        <h3 className="project-title">{props.projectInfo.title}</h3>
        <div className="info-container">
          <div className="project-overview">
            <img src={getImg(props.projectInfo.img)} alt="" className="project-img"/>
            <p className="project-description">
              {props.projectInfo.description}
            </p>
          </div>
          <div className="project-info">
            <h4 className="tech-title">Technologies</h4>
            <div className="tech-list">
              {techList}
            </div>
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