import React from "react";
import ghIcon from "../images/github-mark-white.png";
import LinkedIcon from "../images/icons8-linkedin-circled-90.png";
import StackOverFlowIcon from '../images/StackOverFlowIcon.png'
const Footer = () => {
  return (
    <div className="">
      <div>
        <footer className="footerFlex">
          <a
            href="https://github.com/MrSinzo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="LinkIconFix" src={ghIcon} />
            Kyle's GitHub Profile
          </a>
          <a href="https://www.linkedin.com/in/kyle-feldman-427b5624b/" target="_blank"
            rel="noopener noreferrer">
            <img className="LinkIconFix" src={LinkedIcon} />
            Kyle's LinkedIn Profile
          </a>
          <a href="https://stackoverflow.com/users/21314715/mrsinzo" target="_blank"
            rel="noopener noreferrer">
            <img className="LinkIconFix" src={StackOverFlowIcon} />
            Kyle's StackOverFlow Profile
          </a>
          {/* https://stackoverflow.com/users/21314715/mrsinzo */}
        </footer>
      </div>
    </div>
  );
};

export default Footer;
