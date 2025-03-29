import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Vishrut Bharti</h4>
            <p>© {year} Vishrut Bharti All rights reserved</p>
            <p className="d-flex">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook mx-3"></i>
            </p>
            <p>vishrut.bharti.ece23@itbhu.ac.in</p>
            <p>+91 8192828636</p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>
              "Let’s build something amazing together! I’m passionate about
              solving real-world problems through technology. If you're looking
              for a backend developer or have an exciting project, I’d love to
              hear from you."
            </p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
