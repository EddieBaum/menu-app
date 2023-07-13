import React, { useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  return (
    <section className="parentSection" id="homepage">
      <div id="muLogoBig"></div>
      <div className="ButtonParentDiv">
        <Link to="/menu">
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
      <footer>
        <a
          href="https://www.instagram.com/mu.ribs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="languageButton" id="igButton">
            <span id="igIcon">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </button>
        </a>
      </footer>
    </section>
  );
};

export default Homepage;
