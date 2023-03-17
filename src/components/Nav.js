import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="px-8 flex items-center text-black space-x-5">
        <li>
          <a href="#about" className="font-bold underline-hover-effect">
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" className="font-bold underline-hover-effect">
            Portfolio
          </a>
        </li>
        <li>
          <a className="font-bold underline-hover-effect">Resume</a>
        </li>
        <li>
          <a className="text-white bg-[#032A5D] font-bold py-3 px-4 rounded-3xl hover:shadow-2xl">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
