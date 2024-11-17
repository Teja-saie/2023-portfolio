import React from 'react'
import { FaLinkedinIn,FaGithub, FaInstagram,FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Socialmedia = () => {
  return (
    <div className='flex flex-col justify-center items-stretch'>
        <h2 className='text-white text-xl'>Contact Me</h2>
        <p className='text-white'>You can reach out to me on any of the social media or please send me mail</p>
        <div className="flex font-medium text-lg justify-center gap-2 py-5 text-center">
            <Link to="https://www.linkedin.com/in/teja-venkat-sai-657746204/" className="hover:bg-third p-2 rounded-full text-white" target="_blank"><FaLinkedinIn/></Link>
            <Link to="https://github.com/Teja-saie" className="hover:bg-third p-2 rounded-full text-white" target="_blank"><FaGithub/></Link>
            <Link to="tel:+91-9581111727" className="hover:bg-third p-2 rounded-full  text-white" target="_blank"><FaPhone/></Link>
          </div>
    </div>
  )
}

export default Socialmedia