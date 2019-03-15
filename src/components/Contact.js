import React, {Component} from "react"

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
          <p><a href = "http://linkedin.com/samfreedgood">LinkedIn</a></p>
          <p><a href = "http://github.com/sfreedgood">GitHub</a></p>
          {
            !this.state.viewEmail &&
            <button onClick={this.showEmail}>Email Sam</button>
          }
          {
            this.state.viewEmail &&
            <p>sam.freedgood@gmail.com</p>
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