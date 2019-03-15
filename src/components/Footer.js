import React from "react"
const copyrightLogo = require("../assets/PinClipart.com_jail-clipart-black-and_826375.png")

const Footer = () => {

  return(
    <div className="footer-container">
        <img className="copyright-logo"
          src={copyrightLogo}
          alt="copyright">
        </img>
        <span>2019 | Sam Freedgood</span>
    </div>
  )
}

export default Footer