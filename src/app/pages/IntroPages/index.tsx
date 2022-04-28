import React from 'react';
import logo from './277317533_3099628823619677_2401648112990345020_n.png';
export function Intro() {
  return (
    <>
      {/* Preloader*/}
      {/* <div
          className="preloader d-flex align-items-center justify-content-center"
          id="preloader"
        >
          <div className="spinner-grow text-primary" role="status">
            <div className="sr-only">Loading...</div>
          </div>
        </div> */}
      {/* Internet Connection Status*/}
      <div className="internet-connection-status" id="internetStatus" />
      {/* Hero Block Wrapper*/}
      <div className="hero-block-wrapper bg-primary">
        {/* Styles*/}
        <div className="hero-block-styles">
          <img className="hb-styles1" src={logo} alt="" />
          <div className="hb-styles2" />
          <div className="hb-styles3" />
        </div>
        <div className="container">
          {/* Skip Page*/}
          <div className="skip-page">
            <a href="page-home.html">Алгасах</a>
          </div>
          {/* Hero Block Content*/}
          <div className="hero-block-content">
            <img className="mb-4" src={logo} alt="" />
            <h2 className="display-4 text-white mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              laboriosam!.
            </p>
            <a className="btn btn-warning btn-lg w-100" href="page-login.html">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
