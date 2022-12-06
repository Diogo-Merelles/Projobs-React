import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Guidance.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// const targetDiv = document.getElementById("projobs-fencing-banner");
// const btn = document.getElementById("toggle-btn");
// const arrow = document.getElementById("projobs-fencing-banner-arrow");
// const carouselBtn = document.querySelectorAll(".top-carousel-button");
// const closeHiddenTab = document.getElementById("fa fa-close");

// closeHiddenTab.onclick = () => {
//   if (closeHiddenTab) {
//     targetDiv.style.display = "none";
//     arrow.style.transform = "rotate(45deg)";
//   }
// };

// btn.onclick = () => {
//   if (targetDiv.style.display !== "flex") {
//     targetDiv.style.display = "flex";
//     arrow.style.transform = "rotate(-180deg)";
//   } else {
//     targetDiv.style.display = "none";
//     arrow.style.transform = "rotate(0deg)";
//   }
// };

const Guidance = () => {
  const [showTab, setShowTab] = useState(false);
  
  const onClick = () => {
    setShowTab(true)
  };

  return (
    <div className="main-card">
      <div className="carousel-title-card">
        <div className="carousel-title">
          <div className="carousle-title-left">
            <h1 id="carousel-top" className="top-banner-title">
              How's your job search going?
            </h1>
          </div>
          <div className="carousel-title-right">
            <button className="user-flag" id="toggle-btn" onClick={onClick} >
              {showTab ? <Tab /> : null}
              <span className="projobs-banner-hiddenTab">
                Projobs
                <FontAwesomeIcon className="chevron-icon" icon={faChevronDown} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <p className="subtitle-carousel">
        Check out our guidance to help you get the job you want:
      </p>
    </div>
  );
};

const Tab = () => (
  <div id="projobs-fencing-banner" className="projobs-fencing-banner">
    {/* <i className="fa fa-close" id="fa fa-close" onclick=""></i> */}
    <h2 id="carousel-title-text">Be better prepared</h2>
    <p className="projobs-fencing-banner-text">
      Take advantage of exclusive Projobs content, such as webinars and online
      tutorials.
    </p>
    <button className="top-card-button">Get Projobs</button>
  </div>
);

export default Guidance;
