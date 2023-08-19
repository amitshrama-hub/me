import React from "react";
import "../componentsCSS/Header.css";
import CTA from "./CTA";
import pic1 from '../assets/img/pic1.png';
import HeaderSocial from "./HeaderSocial";

const Home = () => {
  return (
    <header>
       <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Amit Sharma</h1>
          <h5 className="text-light">Computer Science Engineer</h5>
          <CTA/>
          <HeaderSocial/>

          <div className="me">
            <img src={pic1} alt="me" />
          </div>
          <a href="#contact" className="scroll_down">Scroll Down</a>
       </div>
    </header>
  );
};

export default Home;
