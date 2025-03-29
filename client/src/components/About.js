import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div
        className="container mb-3 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Vishrut Bharti</h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                lineHeight: 2,
              }}
            >
              "Hi, I'm Vishrut Bharti, a passionate Backend Developer with a
              knack for building efficient and scalable web applications.
              Currently pursuing my B.Tech in Electronics Engineering from IIT
              BHU, I’m always eager to explore innovative technologies and solve
              real-world problems. I enjoy turning complex challenges into
              elegant solutions, continuously learning and improving my skills
              along the way. Whether it’s collaborating on impactful projects or
              contributing to open-source communities, I’m driven by the desire
              to create meaningful digital experiences."
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="vishrut.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
