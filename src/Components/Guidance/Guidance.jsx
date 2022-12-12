import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Guidance.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {Styled} from "./Styles"


const Guidance = () => {
  const [showTab, setShowTab] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const RotateHandler = () => setIsOpen(!isOpen);
  
  const Rotate = isOpen ? "rotate(-180deg)" : "rotate(0)"; //Good practice?
  
  
  const onClick = () => {
    setShowTab(!showTab)
    setIsOpen(!isOpen)
  };

  return (
    <div>
      <div className="carousel-title-card">
        <div className="carousel-title">
          <div className="carousle-title-left">
            <h1 id="carousel-top" className="top-banner-title">
              How's your job search going?
            </h1>
          </div>
          <div className="carousel-title-right">
            <button className="user-flag" id="toggle-btn" onClick={onClick} >
              <span className="projobs-banner-hiddenTab" onClick={onClick}>
                Projobs
                <FontAwesomeIcon style={{transform: Rotate}} className="chevron-icon" icon={faChevronDown} />
              </span>
            </button>
          </div>
        </div>
      </div>
      {showTab && <Tab /> }
      <p className="subtitle-carousel">
        Check out our guidance to help you get the job you want:
      </p>
    </div>
  );
};

const Tab = () => (
  <div id="projobs-fencing-banner" className="projobs-fencing-banner">
    <h2 id="carousel-title-text">Be better prepared</h2>
    <p className="projobs-fencing-banner-text">
      Take advantage of exclusive Projobs content, such as webinars and online
      tutorials.
    </p>
    <button className="top-card-button">Get Projobs</button>
  </div>
);

export default Guidance;
