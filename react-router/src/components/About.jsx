import React from "react";

const About = () => {
  return (
    <div className="page">
      <h1>About Us</h1>

      <p>
        Ashok Store is an online shopping platform that provides quality
        electronic products at affordable prices.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>Mission</h3>

          <p>
            To provide high-quality products with excellent customer service.
          </p>
        </div>

        <div className="about-card">
          <h3>Vision</h3>

          <p>
            To become a trusted e-commerce platform for customers everywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
