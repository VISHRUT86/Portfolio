import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            {/* <h2>Welcome to <span style={{ color: "#6c63ff" }}>Vishrut Bharti</span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}></p> */}
             <h1 className="text-4xl font-bold mb-4">Hi, I'm <span style={{ color: "#6c63ff" }}>Vishrut Bharti</span></h1>
        <p className="text-lg mb-6">
          I'm a passionate <span className="font-bold">Backend Developer</span> with a keen interest in
          building efficient and scalable web applications. Currently pursuing my
          B.Tech in Electronics Engineering from <span className="font-bold">IIT BHU</span>, I love to explore
          and implement innovative technologies.
        </p>
        <p className="text-lg">
          Whether it's working on complex systems or solving real-world problems,
          I strive to continuously learn and improve my skills.
        </p>
           
          </div>
          <div className="right_div">
            <img src="hp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home