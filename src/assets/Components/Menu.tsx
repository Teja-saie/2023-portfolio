import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

type props={
  isOpen:Boolean,
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
}

const Menu = ({isOpen, setIsOpen}:props) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={isOpen?"bg-black sticky top-0 z-30":"sticky top-0 z-30"}>
      <nav className="flex space-x-4 w-[99vw] h-10 justify-between items-center p-10 backdrop-blur-xl bg-opacity-60">
        <div className="logo w-1/2 font-bold text-fourth items-center flex text-[42px] italic"><Link to={"/"}>Teja</Link> </div>
        <div className="change here ">
          {isOpen?<AiOutlineClose onClick={toggleMenu} className="text-4xl z-40 bg-slate-500 rounded-full p-2 text-white font-semibold"/>:<AiOutlineMenu className="text-4xl  bg-slate-500 rounded-full p-2 text-white font-semibold" onClick={toggleMenu}/>}
        </div>
      </nav>
    </div>
  );
};

export default Menu;
