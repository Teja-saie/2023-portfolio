import React from 'react';
// import resumePDF from './resume.pdf';
import { motion } from 'framer-motion';
import {MdArrowCircleDown} from "react-icons/md"
import { Link } from 'react-router-dom';
import Resume from "../Resume.pdf"

function DownloadResume() {
  return (
    <motion.div  initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    transition={{ duration: 2 }} className="text-center pt-[10vw] min-h-[85vh] flex flex-col justify-center items-center w-screen">
      {/* <h1>Download My Resume</h1>
      <p>Click the button below to download my resume in PDF format.</p>
      <a href={"#"} target="_blank" download><button>Download Resume</button></a> */}
      <h1 className='text-4xl text-white w-[80vw]'>You can download my Resume by clicking on button Below</h1>
      <Link className='flex text-white items-center text-center border-2 border-third p-2 rounder-lg m-3 hover:bg-third hover:text-black font-semibold transition ease-in-out rounded-lg justify-center' to={Resume} download target={'_blank'}>Download Resume <MdArrowCircleDown className='ml-2 text-base'/></Link>
    </motion.div>
  );
}

export default DownloadResume;
