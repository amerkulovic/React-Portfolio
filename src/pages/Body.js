import React from "react";

import "./Body.css";
import Introduction from "../components/homeComponents/Inroduction";
import About from "../components/homeComponents/About";
import Portfolio from "../components/homeComponents/Portfolio";

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
