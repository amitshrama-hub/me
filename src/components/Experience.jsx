import React from "react";
import "../componentsCSS/Experience.css";
import {BiLogoJava} from 'react-icons/bi'
import {FaPhp} from 'react-icons/fa'
import {LiaPython} from 'react-icons/lia'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {LiaCuttlefish} from 'react-icons/lia'
import {GrMysql} from 'react-icons/gr'
import {DiCss3Full} from 'react-icons/di'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>

      <div className="container experience_container">
        
        <p>This page demonstrates the technological expertise I have, which can be a valuable benefit to your business. I'm dedicated and hardworking, and I pledge to use my abilities to meet any demands for your company.</p>
        
        <div className="experience_cards">
          <div className="experience_card">
            <BiLogoJava className='experience_icon'/>
            <h5>Java</h5>
            <small>Intermediate</small>
          </div>

          <div className="experience_card">
          <LiaPython className='experience_icon'/>
            <h5>Pyhon</h5>
            <small>Beginner</small>
          </div>


          <div className="experience_card">
          <LiaCuttlefish className="experience_icon"/>
          <h5>C</h5>
            <small>Beginner</small>
          </div>

          <div className="experience_card">
            <IoLogoJavascript className="experience_icon"/>
            <h5>Javascript</h5>
            <small>Beginner</small>
          </div>

          <div className="experience_card">
          <FaReact className='experience_icon'/>
            <h5>React</h5>
            <small>Beginner</small>
          </div>

          <div className="experience_card">
          <FaPhp className="experience_icon"/>
            <h5>PHP</h5>
            <small>Beginner</small>
          </div>

          <div className="experience_card">
          <GrMysql className="experience_icon"/>
          <h5>MySql</h5>
            <small>Intermediate</small>
          </div>

          <div className="experience_card">
          <DiCss3Full className="experience_icon"/>
          <h5>CSS</h5>
            <small>Intermediate</small>
          </div>

          {/* <div className="experience_card">
          <BiLogoJava className='experience_icon'/>
            <h5>Java</h5>
            <small>intermediate</small>
          </div> */}

          {/* <div className="experience_card">
          <FaPhp className="experience_icon"/>
            <h5>PHP</h5>
            <small>beginner</small>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Experience;
