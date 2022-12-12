import React from 'react'
import { Styled } from '../MainCard/Styles'
import topCardImg from "../../../images/top-card-image.svg";


function MainCard() {
  return (
    <div className='welcomeCard'>
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
    </div>
  )
}

export default MainCard