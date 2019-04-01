import React, {Component} from "react"
const linkedInLogo = require('../assets/linkedin-icon-png--1600.png')
const gitHubLogo = require('../assets/github-free-icon-512.png')
const emailLogo = require('../assets/584856b4e0bb315b0f7675ac.png')
const externalLinkLogo = require("../assets/external_link.png")
export default class Contact extends Component {
  state = {
    viewEmail: false
  }

  showEmail = () => {
    this.setState({
      viewEmail: true
    })
  }
  // handleFormSubmit = (e) => {
  //   e.preventDefault()

  // }

  // handleChange = (e) => {
  //   let field = e.target.name
  //   let value = e.target.value
  //   this.setState(prevState => ({
  //     [field]: value
  //   }))
  // }
  
  render() {
    return(
      <div id="contact" className="contact-container">
        <h1 className={"default-primary-color section-title"}>Contact</h1>
        <div className="contact-links-container">
          <a href = "https://www.linkedin.com/in/sam-freedgood/"
              target={"_blank"}>
            <div className="contact-btn accent-color">
                <img className="media-logo"
                      src={linkedInLogo}
                      alt="link to linkedIn">
                </img>
                LinkedIn
            </div>
          </a>
          <a href = "http://github.com/sfreedgood"
              target={"_blank"}>
            <div className="contact-btn accent-color">
              <img className="media-logo"
                    src={gitHubLogo}
                    alt="link to github">
              </img>
              GitHub
            </div>
          </a>
          <a href = "https://resume.creddle.io/resume/a0apl0kcm3f"
              target={"_blank"}>
            <div className="contact-btn accent-color">
              <img className="media-logo"
                    src={externalLinkLogo}
                    alt="link to resume">
              </img>
              Resume
            </div>
          </a>

          {
            this.state.viewEmail &&
            <div className="email accent-color">
                sam@samfreedgood.dev
            </div>
          }
          
          {
            !this.state.viewEmail &&
          <div className="contact-btn accent-color"
                onClick={this.showEmail}>
            <img className="email-logo"
                  src={emailLogo}
                  alt="email">
            </img>
              Email
          </div>
          }

          {/* <div className="email-form">
            <input name="user_email"
                  placeholder="Your Email"
                  type="string" 
                  onChange={this.handleChange}/>
            <input name="user_subject"
                  placeholder="Subject"
                  type="string" 
                  onChange={this.handleChange}/>
            <input name="user_content"
                  placeholder="Message"
                  type="text" 
                  onChange={this.handleChange}/>
            <button onClick={this.handleFormSubmit} />
          </div> */}
        </div>
      </div>
    )
  }
}