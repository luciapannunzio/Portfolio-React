// Libraries
import React from "react";
// import { FaChevronDown } from "react-icons/fa";
// import { Link } from "react-scroll";

// Components
import Projects from "../components/Projects/Projects";

// Style
import './Work.scss';

function Work() {
  return (
    <div className="first-page">
      <p className="bio">
        Lucia Pannunzio is a Full-Stack
        <br />
        Web-Developer based in Berlin
      </p>
      <Projects />
      {/* <Link className="arrow" to="projects" smooth={true} duration={1000}>
        <FaChevronDown />
      </Link> */}
    </div>
  );
}

export default Work;
