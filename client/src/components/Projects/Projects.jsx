// Libraries
import React, { useRef } from "react";

// Icon
import { FaChevronDown } from "react-icons/fa";

// Assets
import img0 from "../../assets/img/screen00.png";
import img1 from "../../assets/img/screen01.png";
import img2 from "../../assets/img/screen02.png";
import img3 from "../../assets/img/screen03.png";
import img4 from "../../assets/img/screen04.png";
import img5 from "../../assets/img/screen05.png";
import img6 from "../../assets/img/screen06.png";
import img7 from "../../assets/img/screen07.png";
import img8 from "../../assets/img/screen08.png";


// Style
import "./Projects.scss";

function Projects() {
  const positionImages = useRef(null);

  // When clicking on the arrow is navigating to the position of the reference
  // elementRef --> object with properties
  const scrollToBottom = (elementRef) => {
    console.log(window);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="projects">
     <div> <FaChevronDown
        className="icon-arrow"
        onClick={() => 
          scrollToBottom(positionImages)
        }
      /> </div>
        <div style={{ marginTop: "600px" }} ref={positionImages}>
          <img className="img-project" src={img0} alt="" />
          <img className="img-project" src={img1} alt="" />
          <img className="img-project" src={img2} alt="" />
          <img className="img-project" src={img3} alt="" />
          <img className="img-project" src={img4} alt="" />
          <img className="img-project" src={img5} alt="" />
          <img className="img-project" src={img6} alt="" />
          <img className="img-project" src={img7} alt="" />
          <img className="img-project" src={img8} alt="" />
        </div>
    </div>
  );
}

export default Projects;