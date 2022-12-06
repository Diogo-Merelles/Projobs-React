import React, { useState } from "react";
import "./Carousel.css";
import StarWarsPlaceHolder from "../../images/placeholder-starwards.jpeg";

export const Carousel = (active) => {
    
  const [highLigthed, setHighLigthed] = useState();

  

  return (
    <div className="main-card">
      <div className="carousel-nav" id="carousel-nav">
        <button id="top-carousel-button" className="top-carousel-button">
          Write job applications
        </button>
        <button id="top-carousel-button" className="top-carousel-button">
          Prepare for interviews
        </button>
        <button id="top-carousel-button" className="top-carousel-button">
          Get guidance
        </button>
      </div>
      <div className="carousel-container" id="carousel-container">
        <div className="carousel-card" id="carousel-card">
          <img src={StarWarsPlaceHolder} alt="" />
          <div className="carousel-text-box">
            <p className="carousel-card-title">
              <strong>Knowledge to boost your success.</strong>
            </p>
            <p className="carousel-card-subtitle">
              Handy summaries of non-fiction books that help you get ahead.
            </p>
          </div>
        </div>
        <div className="carousel-card" id="carousel-card">
          <img src={StarWarsPlaceHolder} alt="" />
          <div className="carousel-text-box">
            <p className="carousel-card-title">
              <strong>
                Use the "story generator" to create a personalised cover letter.
              </strong>
            </p>
            <p className="carousel-card-subtitle">
              Use the Karrierehelden story generator to create a cover letter.
            </p>
          </div>
        </div>
        <div className="carousel-card" id="carousel-card">
          <img src={StarWarsPlaceHolder} alt="" />
          <div className="carousel-text-box">
            <p className="carousel-card-title">
              <strong>Your digital career companion.</strong>
            </p>
            <p className="carousel-card-subtitle">
              PocketCoach® is the digital coach designed to boost your career.
            </p>
          </div>
        </div>
        <div className="carousel-card" id="carousel-card">
          <img src={StarWarsPlaceHolder} alt="" />
          <div className="carousel-text-box">
            <p className="carousel-card-title">
              <strong>Communicating confidently - webinar for women</strong>
            </p>
            <p className="carousel-card-subtitle">
              Find out how to communicate best at work, e.g. when presenting.
            </p>
          </div>
        </div>
        <div className="carousel-card" id="carousel-card">
          <img src={StarWarsPlaceHolder} alt="" />
          <div className="carousel-text-box">
            <p className="carousel-card-title">
              <strong>Learn how other people see you.</strong>
            </p>
            <p className="carousel-card-subtitle">
              Retorio uses the latest AI technoloty to analyse your effect on
              others.
            </p>
          </div>
        </div>
        <div className="carousel-card" id="carousel-card">
          <img src={StarWarsPlaceHolder} alt="" />
          <div className="carousel-text-box">
            <p className="carousel-card-title">
              <strong>Successful negotiations webinar</strong>
            </p>
            <p className="carousel-card-subtitle">
              Insights into occupational negotiations, conflicts and
              relationships.
            </p>
          </div>
        </div>
        <div className="carousel-card" id="carousel-card">
          <img src={StarWarsPlaceHolder} alt="" />
          <div className="carousel-text-box">
            <p className="carousel-card-title">
              <strong>Rhetoric webinar</strong>
            </p>
            <p className="carousel-card-subtitle">
              Learn all about rhetoric, the art of persuasion
            </p>
          </div>
        </div>
        <div className="carousel-card" id="carousel-card">
          <img src={StarWarsPlaceHolder} alt="" />
          <div className="carousel-text-box">
            <p className="carousel-card-title">
              <strong>Knowladge to boost your success.</strong>
            </p>
            <p className="carousel-card-subtitle">
              Advice for job searches, applications, interviews and
              negotiations.
            </p>
          </div>
        </div>
        <div className="carousel-card" id="carousel-card">
          <img src={StarWarsPlaceHolder} alt="" />
          <div className="carousel-text-box">
            <p className="carousel-card-title">
              <strong>Finding your dream job - webinar</strong>
            </p>
            <p className="carousel-card-subtitle">
              Handy summaries of non-fiction books that help you get ahead.
            </p>
          </div>
        </div>
      </div>
      <button id="bottom-carousel-btn" className={active ? "highligth-carousel" : "top-carousel-button"}>
        View All
      </button>
    </div>
  );
};

export const HighLigthedBtn = (active, onClick) => {
  return (
    <div
      className={active ? "highligth-carousel" : "top-carousel-button"}
      onClick={onClick}
    ></div>
  );
};

export default Carousel;
