import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import useWindowSize from "../Hooks/UseScale";

type props={
  isOpen:Boolean,
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
}

const Menu = ({isOpen, setIsOpen}:props) => {
  const {currentHeight}=useWindowSize();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={isOpen?"bg-black top-0 z-50 fixed":"fixed left-0 top-0 z-30"}>
      <nav className={currentHeight as number < 100 ? 'backdrop-blur-none bg-opacity-0 flex space-x-4 w-[100vw] h-10 justify-between items-center p-10 ' : 'flex space-x-4 w-[100vw] h-10 justify-between items-center p-10 backdrop-blur-xl bg-opacity-60'}>
        <div className="logo w-1/2 font-bold text-fourth items-center flex text-[42px] italic"><Link to={"/"}>Teja</Link> </div>
        <div className="change here ">
          {isOpen?<AiOutlineClose onClick={toggleMenu} className="text-4xl z-40 bg-second rounded-full p-2 text-white font-semibold"/>:<AiOutlineMenu className="text-4xl  bg-third rounded-full p-2 text-white font-semibold" onClick={toggleMenu}/>}
        </div>
      </nav>
    </div>
  );
};

export default Menu;
