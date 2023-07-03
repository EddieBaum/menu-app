import React, { useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {


  return (
    <section className="parentSection" id="homepage">
      <div id="muLogo"></div>
      <div className="ButtonParentDiv">
        <Link to="/english-menu">
          <button className="languageButton" id="english">
            English
          </button>
        </Link>
        <Link to="/spanish-menu">
        <button className="languageButton" id="español">
          Español
          </button>
          </Link>
      </div>
    </section>
  );
};

export default Homepage;
