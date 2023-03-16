import React from "react";
import coding from "../images/coding.svg";

const Introduction = () => {
  return (
    <div className="relative">
      <p className="font-bold text-6xl pt-28 px-10">
        Hi, my name is <span className="text-[#F97444] type-writer">Amer Kulovic</span>
        <br></br>Software Engineer
      </p>
      <p className="font-light px-10 text-lg">Check out my work!</p>
      <img className="absolute right-0 h-96 max-md:hidden" src={coding}></img>
    </div>
  );
};

export default Introduction;
