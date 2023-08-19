import React from "react";
import "../componentsCSS/Portfolio.css";
import img from "../assets/img/img.jpg";
import quiz from "../assets/img/quiz.jpg"
import keepers from "../assets/img/keepers.png"
import tictactoe from "../assets/img/tictactoe.jpg"
import background from "../assets/img/background.jpg"
import wordtyper from "../assets/img/wordtyper.jpg"
import weather from "../assets/img/weather.png"
 
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={weather} alt="image" />
          </div>
          <h3>Weather</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/amitshrama-hub/weather" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://amitshrama-hub.github.io/weather/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={wordtyper} alt="image" />
          </div>
          <h3>WordTyper</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/amitshrama-hub/WordTyper" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://amitshrama-hub.github.io/WordTyper/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={quiz} alt="image" />
          </div>
          <h3>Quizzz</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/amitshrama-hub/quizzz" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://amitshrama-hub.github.io/quizzz/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={keepers} alt="image" />
          </div>
          <h3>Keeper</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/amitshrama-hub/keeper" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://amitshrama-hub.github.io/keeper/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={tictactoe} alt="image" />
          </div>
          <h3>Tic Tac Toe</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/amitshrama-hub/tictactoe" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://amitshrama-hub.github.io/tictactoe/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={background} alt="image" />
          </div>
          <h3>Background Remover</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/amitshrama-hub/Background-remover" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://amitshrama-hub.github.io/Background-remover/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        
      </div>
    </section>
  );
};

export default Portfolio;
