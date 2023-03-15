import React from "react";


const Header = () => {
  return (
    <div className="flex flex-row">
      <h1 className="text-red-300 text-5xl"><span className="text-red-700">A</span>mer</h1>
      <nav className="px-2">
        <a>About Me</a>
        <a>Portfolio</a>
        <a>Contact</a>
      </nav>
    </div>
  );
};

export default Header;
