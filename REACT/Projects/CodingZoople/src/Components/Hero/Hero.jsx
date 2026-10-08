import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Learn Coding</h1>

        <p>
          Learn React, JavaScript and modern web development
          with CodingZoople.
        </p>

        <button>Explore Courses</button>
         <div className="course-links">
         <a href="">Javascript</a>
         <a href="">CSS</a>
         <a href="">HTM;</a>
         <a href="">NODE js</a>
         <a href="">REACT</a>

         </div>
      </div>

    </section>
  );
};

export default Hero;