import "./homestyle.css";
import Fade from "react-reveal/Fade";

import React from "react";
/* Home page // 1st pargrapth of the page */
const Home = () => {
  return (
    <div className="section-hero-inner">
      <div className="centered">
        <Fade top>
          <h1 className = "fs-1">Brandino</h1>
          <Fade left>
            <h2 className= "fs-4">
              <em>#AmazonFINDS Landing page</em>
            </h2>
          </Fade>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
