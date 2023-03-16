import React from "react";
import myMovieSpace from "./images/MyMovieSpace.png";
import indianaJones from "./images/IndianaJones.png";
import futureFinder from "./images/FutureFinder.png";
import socialNetwork from "./images/SocialNetwork.png";
import noteTaker from "./images/NoteTaker.png";
import weatherDashboard from "./images/WeatherDashboard.png";
import githubLogo from "./images/github-white.png";

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;
