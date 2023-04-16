import React from "react";
import Project from "./Project";
import myMovieSpace from "../../images/MyMovieSpace.png";
import indianaJones from "../../images/IndianaJones.png";
import futureFinder from "../../images/FutureFinder.png";
import socialNetwork from "../../images/SocialNetwork.png";
import noteTaker from "../../images/NoteTaker.png";
import weatherDashboard from "../../images/WeatherDashboard.png";
import oceanBuddies from "../../images/OceanBuddies.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#DAD9D5] p-10">
      <h1 className="text-[#032A5D] font-bold text-4xl py-5">Portfolio</h1>
      <div className="flex flex-wrap justify-center">
        <Project link="https://grouponeel.github.io/01_group-project/" imgLink={myMovieSpace} githubLink="https://github.com/GroupOneEl/01_group-project" projectTitle="MyMovieSpace" />
        <Project link="https://ocean-buddies.herokuapp.com/" imgLink={oceanBuddies} githubLink="https://github.com/Oceans-4/Ocean-App" projectTitle="Ocean Buddies" />
        <Project link="https://future-finder.herokuapp.com/" imgLink={futureFinder} githubLink="https://github.com/4-non-non-dorks/future-finder" projectTitle="Future Finder" />
        <Project link="https://amerkulovic.github.io/Indy-Jones-Questionaire/" imgLink={indianaJones} githubLink="https://github.com/amerkulovic/Indy-Jones-Questionaire" projectTitle="Indiana Jones Quiz" />
        <Project link="https://amerkulovic.github.io/Weather-Dashboard/ " imgLink={weatherDashboard} githubLink="https://github.com/amerkulovic/Weather-Dashboard" projectTitle="Weather Board" />
        <Project link="https://www.youtube.com/watch?v=QZSxZ1aRiGQ" imgLink={socialNetwork} githubLink="https://github.com/amerkulovic/Social-Network-API" projectTitle="Social Network" />
      </div>
    </section>
  );
};

export default Portfolio;
