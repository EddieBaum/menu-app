import React from "react";
import "./spanishMenu.css";

const SpanishMenu = () => {
  return (
    <section className="spanish-menu-section">
      <div id="muLogoSmall"></div>
      <div id="itemsContainer">
        <div className="menuBanner" id="ribs">
          <h2>COSTILLAS Y MáS</h2>
          <div class="grid-container">
            <div class="grid-item">
              PEQUEÑO<div className="price">79K</div>
            </div>
            <div class="grid-item">
              MEDIO<div className="price">89K</div>
            </div>
            <div class="grid-item">
              GRANDE<div className="price">99K</div>
            </div>
          </div>
          <div className="sideInfo">
            <p>
              All sizes are served with a porcion of french fries, nachos,
              guacamole and a selection of house sauces.
            </p>
          </div>
          <h2>EXTRAS</h2>
          <div class="grid-container">
            <div class="grid-item">
              Nachos/Guac
              <div className="price">40k</div>
            </div>
            <div class="grid-item">
              Nachos
              <div className="price">40k</div>
            </div>
            <div class="grid-item">
              Guacamole
              <div className="price">40k</div>
            </div>
            <div class="grid-item">
              Chips
              <div className="price">40k</div>
            </div>
            <div class="grid-item">
              Helado
              <div className="price">40k</div>
            </div>
            <div class="grid-item">
              Salsa
              <div className="price">40k</div>
            </div>
          </div>
        </div>
        <div className="menuBanner" id="cocktails">
          <h2>COCKTAILS</h2>
          <div class="grid-container">
            <div class="grid-item">
              Mojito<div className="price">38k</div>
            </div>
            <div class="grid-item">
              Gin & Tonic<div className="price">38k</div>
            </div>
            <div class="grid-item">
              Margarita<div className="price">38k</div>
            </div>
            <div class="grid-item">
              Cuba Libre<div className="price">38k</div>
            </div>
            <div class="grid-item">
              Shots<div className="price">38k</div>
            </div>
            <div class="grid-item">
              Enjoy<div className="price">0k</div>
            </div>
          </div>
        </div>
        <div className="menuBanner" id="beerWine">
          <h2>Beers and Wine</h2>
        </div>
        <div className="menuBanner" id="nonAlcoholic">
          <h2>Non-Alcoholic</h2>
        </div>
      </div>
      <footer id="generalInfoFooter">
        <p>
          Methods to pay, Hours of operation, price includes tax, @MUMedellin IG
        </p>
      </footer>
    </section>
  );
};

export default SpanishMenu;
