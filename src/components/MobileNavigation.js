import NavLinks from "./NavLinks";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const MobileNavigation = () => {
    
  const [open, setOpen] = useState(false);

  return (
    <nav className="mobile-navigation">
      <AiOutlineMenu className="hamburger" size="40px" color="#f97444" onClick={() => console.log("You clicked on the icon")} />
      <NavLinks />
    </nav>
  );
};

export default MobileNavigation;
