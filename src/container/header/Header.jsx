import React from 'react';
import "./header.css";
import github from "../../assets/nav_icons/github-logo-24.png";
import insta from "../../assets/nav_icons/instagram-alt-logo-24.png";
import linkedin from "../../assets/nav_icons/linkedin-square-logo-24.png";
import rights from "../../assets/nav_icons/copyright-regular-24.png";


const Header = () => {


    return (
      <div className="header">
        <div className="header__logo">
          <img src={rights} alt="copy_rights" />
          <p id="header--title">Coded by Collins</p>
        </div>
        <div className="header__nav">
          <a href="https://github.com/collins-nc">
            <div className="header__nav--hover">
              <img src={github} alt="github" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/noko-moeketsi-a3b423226/">
            <div className="header__nav--hover">
              <img src={linkedin} alt="insta" />
            </div>
          </a>
          <a href="https://www.instagram.com/nc_collis/">
            <div className="header__nav--hover">
              <img src={insta} alt="linkedin" />
            </div>
          </a>
        </div>
      </div>
    );
}

export default Header;