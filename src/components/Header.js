import React from "react";
import "./Header.css";
import Nav from "./navComponents/Nav";

const Header = () => {
  return (
    <div className="flex flex-row py-5 justify-between">
      <h1 className="text-[#032A5D] text-5xl px-5 font-bold">
        <span className="text-[#F97444]">&lt;</span>Amer <span className="text-[#F97444]">/&gt;</span>
      </h1>
      <Nav />
    </div>
  );
};

export default Header;
