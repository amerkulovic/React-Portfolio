import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -30 };
  const animateTo = { opacity: 1, y: 0 };
  let className = "";

  const location = useLocation();

  let aboutNav = (
    <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.1 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
      <a href="#about" className="font-bold underline-hover-effect">
        About
      </a>
    </motion.li>
  );

  let portfolioNav = (
    <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.13 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
      <a href="#portfolio" className="font-bold underline-hover-effect">
        Portfolio
      </a>
    </motion.li>
  );

  props.isMobile ? (className += " font-bold underline-hover-effect") : (className += "text-white bg-[#032A5D] font-bold py-3 px-4 rounded-3xl hover:shadow-2xl contact-card");

  return (
    <ul className="px-8 flex items-center text-black space-x-5">
      <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/">
          <a className="font-bold underline-hover-effect ml-6">Home</a>
        </Link>
      </motion.li>
      {location.pathname === "/" && aboutNav}
      {location.pathname === "/" && portfolioNav}
      <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.15 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/resume">
          <a className="font-bold underline-hover-effect">Resume</a>
        </Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.2 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/contact">
          <a className={className}>Contact</a>
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
