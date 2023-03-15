import React from "react";

const Body = () => {
  return (
    <div className="h-full">
      <p className="font-bold text-6xl pt-28 px-10">
        Hi, my name is <span className="text-[#F97444]">Amer Kulovic</span>.<br></br>Software Engineer
      </p>
      <p className="font-light px-10 text-lg">Check out my work!</p>
      <section className="bg-[#032A5D] mt-80 p-10">
        <h1 className="text-[#F97444] font-bold text-4xl py-5">About Me</h1>
        <p className="text-[#FEFBEC] font-semibold text-2xl mx-7 py-5">My name is Amer Kulovic. I am a Software Engineer! I have a certificate from Northwestern in Software Engineering and a degree in Business Management from Northeastern Illinois University. I am an active learner and love tackling new tasks. I am experienced in </p>
        <ul className="text-[#FEFBEC] font-semibold text-2xl py-5 inline-block">
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>jQuery</li>
        </ul>
        <p className="text-[#FEFBEC] font-semibold text-2xl mx-7 py-5">I have built multiple websites from scratch and I'm continuously learning more about the world of coding! Some personal hobbies of mine are playing basketball, weightlifting, and watching movies.</p>
      </section>
    </div>
  );
};

export default Body;
