import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row py-5 justify-between">
      <h1 className="text-purple-800 text-5xl px-5">
        &lt;Ame<span className="text-purple-500">r /&gt;</span>
      </h1>
      <nav className="px-8 flex items-center text-black space-x-5">
        <a className="font-bold">About Me</a>
        <a className="font-bold">Portfolio</a>
        <a className="text-white bg-purple-800 font-bold p-3 rounded-3xl">Contact Me</a>
      </nav>
    </div>
  );
};

export default Header;
