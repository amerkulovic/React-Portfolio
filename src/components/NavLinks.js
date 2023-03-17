import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -30 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul className="px-8 flex items-center text-black space-x-5">
      <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#about" className="font-bold underline-hover-effect">
          About
        </a>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.10}} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#portfolio" className="font-bold underline-hover-effect">
          Portfolio
        </a>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.15}} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a className="font-bold underline-hover-effect">Resume</a>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.20}} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a className="text-white bg-[#032A5D] font-bold py-3 px-4 rounded-3xl hover:shadow-2xl contact-card">Contact</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
