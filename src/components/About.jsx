import React from "react";
import "../componentsCSS/About.css";
import pic2 from "../assets/img/pic2.jpg";
import { FaAward } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={pic2} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about_card">
              <PiCertificateLight className="about_icon" />
              <h5>Certification</h5>
              <small>8+ Certificates</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>6+ Projects</small>
            </article>
          </div>

          <p>
            I'm thrilled to present my recent graduating portfolio, which
            highlights my abilities, successes, and future. My schoolwork,
            projects, internships, and extracurricular activities are all
            included in this collection. It reflects my enthusiasm for web
            development, my capacity for problem-solving, and my dedication to
            improvement. I think this portfolio shows that I'm prepared to
            contribute to a growing company, and I'm eager to talk to you about
            any potential prospects.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
