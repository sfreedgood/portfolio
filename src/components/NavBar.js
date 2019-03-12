import React from "react"
import "./navBar.css"

const NavBar = () => {

  return(
    <div className="nav-container">
      <a className={"nav-btn"} href="#about">About</a>
      <a className={"nav-btn"} href="#contact">Contact</a>
      <a className={"nav-btn"} href="#projects">Projects</a>
    </div>
  )
}

export default NavBar