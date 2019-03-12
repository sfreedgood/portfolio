import React from "react"
import "./navBar.css"

const NavBar = () => {
  const aboutLabel = '<a>About</a>'
  const contactLabel = '<a>Contact</a>'
  const projectsLabel = '<a>Projects</a>'

  return(
    <div className="nav-container">
      <a className={"nav-btn"} href="#about">{aboutLabel}</a>
      <a className={"nav-btn"} href="#contact">{contactLabel}</a>
      <a className={"nav-btn"} href="#projects">{projectsLabel}</a>
    </div>
  )
}

export default NavBar