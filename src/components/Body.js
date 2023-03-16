import React from "react";

import "./Body.css";
import Introduction from "./Inroduction";
import Portfolio from "./Portfolio";
import About from "./About";

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
