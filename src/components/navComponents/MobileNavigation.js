import NavLinks from "./NavLinks";
import "../Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <AiOutlineMenu className="hamburger" size="40px" color="#f97444" onClick={() => setOpen(!open)} />;
  const closeIcon = <AiOutlineClose className="hamburger" size="40px" color="#f97444" onClick={() => setOpen(!open)} />;

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobile-navigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
