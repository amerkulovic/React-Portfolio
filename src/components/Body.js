import React from "react";
import "./Body.css";
import Portfolio from "./Portfolio";
import About from "./About";

const Body = () => {
  return (
    <div className="h-full">
      <p className="font-bold text-6xl pt-28 px-10">
        Hi, my name is <span className="text-[#F97444] type-writer">Amer Kulovic</span>
        <br></br>Software Engineer
      </p>
      <p className="font-light px-10 text-lg">Check out my work!</p>
      <About />
      <Portfolio />
    </div>
  );
};

export default Body;
