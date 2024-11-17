import { Link } from 'react-router-dom';
import Typewriter from './TypeWrites';
import {AiOutlineMail} from "react-icons/ai"

const Banner = () => {

  return (
    <div className='snap-start bg-hero-pattern bg-no-repeat bg-cover w-screen md:w-screen text-white h-[100vh] overflow-hidden grid place-content-center'>
      <div className='banner rounded-2xl h-[80vh] w-[80vw] flex justify-center flex-col items-center'>
        <h1 className='text-4xl text-white'>Hi, I'm <span className='font-extrabold'>Teja</span></h1>
        <p className='my-2 text-2xl font-semibold'>I am a <Typewriter texts={['Full Stack Developer','MERN Stack Develop']} /></p>
        <Link to="/contact" className='flex items-center text-center border-2 border-third p-2 rounder-lg w-[150px] m-3 hover:bg-third hover:text-black font-semibold transition ease-in-out rounded-lg justify-center'>Contact Me <AiOutlineMail className='inline ml-[4px]'/></Link>
      </div>
    </div>
  )

}

export default Banner;
