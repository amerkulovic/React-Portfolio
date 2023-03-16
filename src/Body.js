import React from "react";
import "./Body.css";
import myMovieSpace from "./images/MyMovieSpace.png";
import indianaJones from "./images/IndianaJones.png";
import futureFinder from "./images/FutureFinder.png";
import socialNetwork from "./images/SocialNetwork.png";
import noteTaker from "./images/NoteTaker.png";
import weatherDashboard from "./images/WeatherDashboard.png";
import githubLogo from "./images/github-white.png";

const Body = () => {
  return (
    <div className="h-full">
      <p className="font-bold text-6xl pt-28 px-10">
        Hi, my name is <span className="text-[#F97444]">Amer Kulovic</span>.<br></br>Software Engineer
      </p>
      <p className="font-light px-10 text-lg">Check out my work!</p>
      <section className="bg-[#032A5D] mt-80 p-10">
        <h1 className="text-[#CCDAEB] font-bold text-4xl py-5">About Me</h1>
        <p className="text-[#FEFBEC] font-semibold text-2xl mx-7 py-5">My name is Amer Kulovic, I am a Software Engineer! I have a certificate from Northwestern in Software Engineering and a degree in Business Management from Northeastern Illinois University. I am an active learner and love tackling new tasks. I am experienced in : </p>
        <ul className="text-[#FEFBEC] font-semibold text-2xl py-5 text-center">
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
      <section className="bg-[#DAD9D5] p-10">
        <h1 className="text-[#032A5D] font-bold text-4xl py-5">Portfolio</h1>
        <div className="inline-block">
          <button>
            <a href="https://grouponeel.github.io/01_group-project/" target="_blank">
              <div className="container">
                <img src={myMovieSpace} className="work-picture"></img>
                <h1 className="picture-text">MyMovieSpace</h1>
                <a className="github-text" href="https://github.com/GroupOneEl/01_group-project" target="_blank">
                  <img src={githubLogo} width="50" height="50"></img>
                </a>
              </div>
            </a>
          </button>
          <button>
            <a href="https://amerkulovic.github.io/Indy-Jones-Questionaire/" target="_blank">
              <div className="container">
                <img src={indianaJones} className="work-picture"></img>
                <h1 className="picture-text">Indiana Jones Quiz</h1>
                <a className="github-text" href="https://github.com/amerkulovic/Indy-Jones-Questionaire" target="_blank">
                  <img src={githubLogo} width="50" height="50"></img>
                </a>
              </div>
            </a>
          </button>
          <button>
            <a href="https://future-finder.herokuapp.com/" target="_blank">
              <div className="container">
                <img src={futureFinder} className="work-picture"></img>
                <h1 className="picture-text">Future Finder</h1>
                <a className="github-text" href="https://github.com/4-non-non-dorks/future-finder" target="_blank">
                  <img src={githubLogo} width="50" height="50"></img>
                </a>
              </div>
            </a>
          </button>
          <button>
            <a href="https://amerkulovic.github.io/Weather-Dashboard/ " target="_blank">
              <div className="container">
                <img src={weatherDashboard} className="work-picture"></img>
                <h1 className="picture-text">Future Finder</h1>
                <a className="github-text" href="https://github.com/amerkulovic/Weather-Dashboard" target="_blank">
                  <img src={githubLogo} width="50" height="50"></img>
                </a>
              </div>
            </a>
          </button>
          <button>
            <a href="https://www.youtube.com/watch?v=QZSxZ1aRiGQ" target="_blank">
              <div className="container">
                <img src={socialNetwork} className="work-picture"></img>
                <h1 className="picture-text">Social Network API</h1>
                <a className="github-text" href="https://github.com/amerkulovic/Social-Network-API" target="_blank">
                  <img src={githubLogo} width="50" height="50"></img>
                </a>
              </div>
            </a>
          </button>
          <button>
            <a href="https://note-taker-ak2.herokuapp.com/" target="_blank">
              <div className="container">
                <img src={noteTaker} className="work-picture"></img>
                <h1 className="picture-text">Note Taking App</h1>
                <a className="github-text" href="https://github.com/amerkulovic/Note-Taker" target="_blank">
                  <img src={githubLogo} width="50" height="50"></img>
                </a>
              </div>
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Body;
