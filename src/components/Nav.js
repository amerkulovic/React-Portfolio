import React from "react";

const Nav = () => {
  return (
    <nav className="px-8 flex items-center text-black space-x-5">
      <button>
        <a href="#about" className="font-bold underline-hover-effect">About Me</a>
      </button>
      <button>
        <a href="#portfolio" className="font-bold underline-hover-effect">Portfolio</a>
      </button>
      <button>
        <a className="font-bold underline-hover-effect">Resume</a>
      </button>
      <button>
        <a className="text-white bg-[#032A5D] font-bold py-3 px-4 rounded-3xl hover:shadow-2xl">Contact</a>
      </button>
    </nav>
  );
};
export default Nav;
