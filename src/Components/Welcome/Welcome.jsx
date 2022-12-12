import React from "react";
import topCardImg from "../../images/top-card-image.svg";
import SearchIcon from "../../images/icons8-search.svg";
import "./Welcome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  return (
    <div>
      <div className="top-card">
        <div className="top-card-left w-50">
          <div className="top-banner">Projobs</div>
          <h1 className="top-banner-title">
            Hi Diogo, here's what you get by upgrading to Projobs.
          </h1>
          <div className="top-card-text">
            <div className="text-container">
              <i className="fa fa-check"></i>
              <p className="text-container-item">
                Boost your visibility among recruiters
              </p>
            </div>
            <div className="text-container">
              <i className="fa fa-check"></i>
              <p className="text-container-item">
                Set jobseeker criteria for you next job
              </p>
            </div>
            <div className="text-container">
              <i className="fa fa-check"></i>
              <p className="text-container-item">
                Gain exclusive access to expert knowledge
              </p>
            </div>
          </div>
          <button className="top-card-button">Get Projobs</button>
        </div>
        <div className="top-card-right w-50">
          <img src={topCardImg} alt="top card svg" className="top-card-svg" />
        </div>
      </div>
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
