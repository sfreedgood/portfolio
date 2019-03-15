import React, {Component} from "react"
const linkedInLogo = require('../assets/linkedin-icon-png--1600.png')
const gitHubLogo = require('../assets/github-free-icon-512.png')
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
      <div id={"contact"}>
        <div className="dark-primary-color contact-container section-container">
          <h1>Contact Sam</h1>
          <div className="contact-links-container">
            <a href = "https://www.linkedin.com/in/sam-freedgood/"
               target={"_blank"}>
              <div className="contact-btn accent-color">
                  <img className="media-logo"
                       src={linkedInLogo}
                       alt="linkedIn">
                  </img>
                  LinkedIn
              </div>
            </a>
            <a href = "http://github.com/sfreedgood"
               target={"_blank"}>
              <div className="contact-btn accent-color">
                <img className="media-logo"
                     src={gitHubLogo}
                     alt="github">
                </img>
                GitHub
              </div>
            </a>
            {
              !this.state.viewEmail &&
            <div>
              <p className="contact-btn accent-color"
                  onClick={this.showEmail}>
                Email Sam</p>
            </div>
            }
            {
              this.state.viewEmail &&
              <p className="contact-btn email accent-color">
                sam.freedgood@gmail.com
              </p>
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
      </div>
    )
  }
}