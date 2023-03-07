import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="bg-black-400 w-screen h-screen grid place-content-center overflow-y-hidden">
      <motion.h1
        className="text-[42px] text-white"
        initial={{ fontSize:"42px",color:"red"}}
        animate={{ fontSize:"84px",color:"yellow"}}
        exit={{fontSize:"84px"}}
        transition={{ duration: 6 }}
      >
        Welcome to My Website
      </motion.h1>
    </div>
  );
};

export default Loader;
