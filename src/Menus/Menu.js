import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <section className="english-menu-section">
      <div id="muLogoSmall"></div>
      <div id="itemsContainer">
        <div className="menuBanner" id="ribs">
          <h2>RIBS & MORE</h2>
          <div class="grid-container">
            <div class="grid-item">SMALL<div className="price">79K</div></div>
            <div class="grid-item">MEDIUM<div className="price">89K</div></div>
            <div class="grid-item">LARGE<div className="price">99K</div></div>
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
  <div class="grid-item">Mojito<div className="price">38k</div></div>
  <div class="grid-item">Gin & Tonic<div className="price">38k</div></div>
  <div class="grid-item">Margarita<div className="price">38k</div></div>
  <div class="grid-item">Cuba Libre<div className="price">38k</div></div>
  <div class="grid-item">Shots<div className="price">38k</div></div>
  <div class="grid-item">Enjoy<div className="price">0k</div></div>
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

export default Menu;

/*
    <h3>RIBS</h3> //THIS CODE IS FOR THE STATIC NON INTERACTIVE MENU, BASIC INFO AND PRICE
    <div className='rib-plates'>
        <div className="size">Personal Plate</div>
        <div className="size">Medium Plate</div>
        <div className="size">Large Plate</div>
    </div>
    <h3>COCKTAILS</h3>
    <div className='cocktails-box'>
        <div className="drink">Mojito 28k</div>
        <div className="drink">Gin & Tonic 31k</div>
        <div className="drink">Margarita 29k</div>
        <div className="drink">Cuba Libre 27k</div>
        <div className="drink">Shot 15k</div>
    </div>
    <h3>BEERS</h3>
    <div className='beer-box'>
        <div className="beer">3 Cordilleras</div>
        <div className="beer">Club Colombia</div>
        <div className="beer">Stella</div>
        <div className="beer">Aguila</div>
        <div className="beer">Aguila Light</div>
        <div className="beer">Heineken</div>
        <div className="beer">Corona</div>
    </div> 
*/
