import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row py-5 justify-between">
      <h1 className="text-[#032A5D] text-5xl px-5 font-bold">
        <span className="text-[#F97444]">&lt;</span>Amer <span className="text-[#F97444]">/&gt;</span>
      </h1>
      <nav className="px-8 flex items-center text-black space-x-5">
        <a className="font-bold">About Me</a>
        <a className="font-bold">Portfolio</a>
        <a className="text-white bg-[#032A5D] font-bold py-3 px-4 rounded-3xl">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
