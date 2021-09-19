import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import "./Footer.css";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <Link activeClass="active" to="goToTop" spy={true} smooth={true}>
        <button className="btnf">
          <FaArrowCircleUp className="upa" />
        </button>
      </Link>
      <div className="foo">
        <a href="https://github.com/ronyfr3" rel="noreferrer" target="_blank">
          <FaGithub className="cli" />
        </a>

        <a
          href="https://www.linkedin.com/in/abdur-rakib-rony-769367214/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin className="cli" />
        </a>
      </div>
      <p className="copyright">
        <BiCopyright className="copyr" /> Powered By Abdur Rakib Rony
      </p>
    </div>
  );
};

export default Footer;
