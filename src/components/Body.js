import React from "react";

import "./Body.css";
import Introduction from "./Inroduction";
import About from "./About";
import Portfolio from "./Portfolio";

const Body = () => {
  return (
    <div>
      <Introduction />
      <About />
      <Portfolio />
    </div>
  );
};

export default Body;
