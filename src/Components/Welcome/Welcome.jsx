import React from "react";
// import topCardImg from "../../images/top-card-image.svg";
import SearchIcon from "../../images/icons8-search.svg";
import "./Welcome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MainCard from "./MainCard/MainCard";
import SubCard from "./SubCard/SubCard";

const Welcome = () => {
  return (
    <div>
      <MainCard />
      {/* <SubCard 
          image=""
          title="Have any recruiters visited your profile?"
          subTitle="Find out now by browsing your profile visitors."
          activeRef=""
          /> */}
      <div className="bottom-card-container">
        <div className="bottom-card">
          <div className="left-bottom-card-left">
            <img
              src={SearchIcon}
              alt="bottom left svg"
              className="bottom-left-svg"
            />
          </div>
          <div className="left-bottom-card-right">
            <h2 className="left-bottom-card-title">
              Have any recruiters visited your profile?
            </h2>
            <div className="left-bottom-card-subtitle">
              Find out now by browsing your profile visitors.
            </div>
            <div className="left-bottom-card-action">
              <p className="card-action-text">Show profile visitors</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="bottom-card">
          <div className="right-bottom-card-left">
            <img
              src={SearchIcon}
              alt="bottom left svg"
              className="bottom-right-svg"
            />
          </div>
          <div className="right-bottom-card-right">
            <h2 className="right-bottom-card-title">
              Fine-tune your visibility
            </h2>
            <div className="right-bottom-card-subtitle">
              Choose who can and can't see your jobseeker criteria and Projobs
              details.
            </div>
            <div className="right-bottom-card-action">
              <p className="card-action-text">Edit criteria</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
