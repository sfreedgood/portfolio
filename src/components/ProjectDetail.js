import React from "react"

const scribblrImg = require("../assets/Scribblr.png")
const zaruttoImg = require("../assets/Zarutto.png")
const nomadzImg = require("../assets/Nomadz.png")
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
      case 'Nomadz':
        return nomadzImg
      case 'PickAPark':
        return console.log("check logic, video should be loaded")
      default:
        return null
    }
  }

  return(
      <div className="gainsboro project-container">
        <h3 className="project-title dark-gray">
          {props.projectInfo.title}
        </h3>
        <div className="info-container">
          <div className="project-overview">
            { 
              props.projectInfo.img === 'PickAPark' ?
              <div className="video-container">
                <iframe 
                    title="Pick A Park Demo"
                    src="https://www.youtube.com/embed/s2EC2W3c3WQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
              </div>
              :
              <img src={getImg(props.projectInfo.img)} alt="" className="project-img"/>
            }
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