import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <header className="about-header">
        <h1>About WarmConnect</h1>
      </header>

      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          At <span className="highlight">WarmConnect</span>, our mission is simple:
          to connect donors and receivers, bringing hope and warmth directly from your home.
        </p>

        <h2>What We Do</h2>
        <p>
          We facilitate donations of items such as accessories, clothes, kids' items, 
          food, furniture, tech gadgets, books, medicines, bags, and more. 
          Every donation goes directly to someone in need, ensuring your contributions make a real impact.
        </p>

        <h2>Our Motto</h2>
        <p className="motto">
          "From your home to <span className="highlight">someone's hope</span>"
        </p>
      </div>
    </div>
  );
};

export default About;
