import React from 'react';
// import resumePDF from './resume.pdf';
import { motion } from 'framer-motion';

function DownloadResume() {
  return (
    <motion.div  initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    transition={{ duration: 2 }} className="flex flex-col justify-center items-center">
      <h1>Download My Resume</h1>
      <p>Click the button below to download my resume in PDF format.</p>
      <a href={"#"} target="_blank" download><button>Download Resume</button></a>
    </motion.div>
  );
}

export default DownloadResume;
