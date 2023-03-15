import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row py-5 justify-between">
      <h1 className="text-[#032A5D] text-5xl px-5 font-bold">
        <span className="text-[#F97444]">&lt;</span>Amer <span className="text-[#F97444]">/&gt;</span>
      </h1>
      <nav className="px-8 flex items-center text-black space-x-5">
        <button><a className="font-bold hover:text-[#F97444]">About Me</a></button>
        <button><a className="font-bold hover:text-[#F97444]">Portfolio</a></button>
        <button><a className="text-white bg-[#032A5D] font-bold py-3 px-4 rounded-3xl hover:shadow-2xl">Contact</a></button>
      </nav>
    </div>
  );
};

export default Header;
