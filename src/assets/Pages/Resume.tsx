import React from 'react';
// import resumePDF from './resume.pdf';
import { motion } from 'framer-motion';
import {MdConstruction} from "react-icons/md"

function DownloadResume() {
  return (
    <motion.div  initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    transition={{ duration: 2 }} className="pt-[10vw] h-screen flex flex-col justify-center items-center">
      {/* <h1>Download My Resume</h1>
      <p>Click the button below to download my resume in PDF format.</p>
      <a href={"#"} target="_blank" download><button>Download Resume</button></a> */}
      <h1 className='text-4xl text-white'>This Page is under construction <MdConstruction className='inline animate-bounce'/></h1>
    </motion.div>
  );
}

export default DownloadResume;
