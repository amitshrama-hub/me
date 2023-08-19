import React from "react";
import "../componentsCSS/Resume.css";
import { type } from "@testing-library/user-event/dist/type";

const Resume = () => {
  return (
    <section id="resume">
      <h5>This is</h5>
      <h2>Resume</h2>

      <div className="container resume_container">
        <div className="resume_content">
          <p>
            Below, you will find a summary of my qualifications, experience, and
            skills that make me a strong candidate in Computer Science. This
            resume showcases my expertise, achievements, and dedication to
            excellence. I am excited to present my qualifications for your
            consideration.
          </p>
          <div className="resume_all_cards">
            <div className="resume_first_cards">
              <div className="resume_cards">
                <h3 className="heading">Summary</h3>
                <div className="resume_card sumary_card">
                  <h4 className="title">
                    <b>AMIT SHARMA</b>
                  </h4>
                  <p>
                    Hello! My name is Amit Sharma. I'm a Computer Science
                    Engineer with a passion for web development. Throughout my
                    career, I have worked on various projects and gained
                    valuable insights into web development. I am skilled in
                    communication and organization, working well with others and
                    handling multiple tasks efficiently.
                  </p>
                  <ul>
                    <li>Kosi Kalan (Mathura), Uttar Pradesh, India</li>
                    <li>+91 6395442158</li>
                    <li>amitsharma60120@gmail.com</li>
                  </ul>
                </div>
              </div>

              <div className="resume_cards">
                <h3 className="heading">Education</h3>
                <div className="resume_card">
                  <h4 className="title">School Details</h4>
                  <p>
                    At Saraswati Vidhya Mandir, Kosi Kalan (Mathura), I achieved
                    exceptional 85% in High School and 86% with distinction in
                    Intermediate, showcasing my commitment to academic
                    excellence.These marks not only reflect my academic prowess
                    but also the unwavering passion and hard work I invested in
                    my education during my school time.
                  </p>
                </div>
                <div className="resume_card">
                  <h4 className="title">B. Tech</h4>
                  <h5>2020-2024</h5>
                  <p>
                    Throughout my B.Tech journey, I delved into diverse
                    engineering disciplines, honed problem-solving skills, and
                    embraced innovation, paving the way for my future career
                    aspirations.I not only excelled academically but also
                    actively engaged in extracurricular activities. I had the
                    privilege of serving as Technical Head in A4 Algo Club,
                    where I led and collaborated with a team of enthusiastic
                    individuals.
                  </p>
                </div>
              </div>
            </div>
            <div className="resume_cards">
              <h3 className="heading">Professional Experience</h3>
              <div className="resume_card">
                <h4 className="title">
                  <b>TuteDude</b>
                </h4>
                <h5>May 2023 - June 2023</h5>
                <div className="resume_address"></div>
                <ul>
                  <li>
                    Master React, a powerful front-end library, to build dynamic
                    user interfaces, handle state management, and create
                    reusable components for a smooth and interactive user
                    experience.
                  </li>
                  <li>
                    Gain insights into deploying websites to servers and various
                    hosting platforms, making your projects accessible to users
                    worldwide.
                  </li>
                  <li>
                    Learn the importance of web accessibility and inclusive
                    design principles, ensuring that websites are usable and
                    accessible to people with disabilities.
                  </li>
                </ul>
              </div>
              <div className="resume_card">
                <h4 className="title">
                  <b> Job Oriented Value-Added Course</b>
                </h4>
                <h5>June 2022 - July 2022</h5>
                <div className="resume_address">GLA University, Mathura</div>
                <ul>
                  <li>
                    Master the fundamentals of HTML to create the structural
                    framework of websites.
                  </li>
                  <li>
                    Dive into CSS to style web pages, utilizing selectors,
                    layouts, and responsive design techniques to create visually
                    appealing and user-friendly interfaces.
                  </li>
                  <li>
                    Understand how to integrate APIs into web projects, enabling
                    data retrieval and interaction with external services to
                    enrich website functionality.
                  </li>
                  <li>
                    Learn how to create responsive websites that adapt
                    seamlessly to various screen sizes and devices.
                  </li>
                </ul>
              </div>
              <div className="resume_card">
                <h4 className="title">
                  <b>Android App Development</b>
                </h4>
                <h5>May 2022 - June 2022</h5>
                <ul>
                  <li>
                    Have a solid understanding of Android app development,
                    including creating user interfaces, handling user input,
                    managing activities{" "}
                  </li>
                  <li>
                    Familiarity with Android Studio, the official IDE for
                    Android development, including using the layout editor,
                    debugging tools, and build system.
                  </li>
                  <li>
                    Understanding of basic user interface and user experience
                    design principles to create user-friendly apps.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
