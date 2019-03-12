import React from "react"

const Landing = () => {
  const aboutLabel = '<a>About</a>'
  const contactLabel = '<a>Contact</a>'
  const projectsLabel = '<a>Projects</a>'

  return(
    <div className="section-container">
      <h1>I am the Landing page</h1>
      <a href="./About.js">{aboutLabel}</a>
      <a href="./Contact.js">{contactLabel}</a>
      <a href="./Projects.js">{projectsLabel}</a>
    </div>
  )
}

export default Landing