import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn,FaGithub, FaInstagram } from 'react-icons/fa';



type props = {
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamberger = ({ isOpen, setIsOpen }: props) => {
  return (
    <AnimatePresence>
    {isOpen && <motion.div initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }} className={!isOpen?"fixed top-0 left-0 h-screen w-screen":"fixed z-50"}>
        <div onClick={()=>setIsOpen(false)} className="z-50 flex flex-col h-screen w-screen bg-black text-[30px] tracking-widest text-white justify-center items-center gap-4 cursivet">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-third p-[10px] rounded-lg"
                : "text-white hover:bg-third p-[10px] rounded-lg"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/resume/"
            className={({ isActive }) =>
              isActive
                ? "bg-third p-[10px] rounded-lg"
                : "text-white hover:bg-third p-[10px] rounded-lg"
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact/"
            className={({ isActive }) =>
              isActive
                ? "bg-third p-[10px] rounded-lg"
                : "text-white hover:bg-third p-[10px] rounded-lg"
            }
          >
            Contact
          </NavLink>
          <div className="flex font-medium text-lg justify-around gap-2">
            <Link to="#" className="hover:bg-third p-2 rounded-full" target="_blank"><FaLinkedinIn/></Link>
            <Link to="#" className="hover:bg-third p-2 rounded-full" target="_blank"><FaGithub/></Link>
            <Link to="#" className="hover:bg-third p-2 rounded-full" target="_blank"><FaInstagram/></Link>
          </div>
        </div>
    </motion.div>}
    </AnimatePresence>
  );
};

export default Hamberger;
