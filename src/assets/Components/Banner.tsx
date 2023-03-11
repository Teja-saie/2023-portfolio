import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from "../Hooks/UseScale";
import Typewriter from './TypeWrites';

const Banner = () => {
  const { width, height } = useWindowSize();
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const bannerOffsetTop = banner.offsetTop;
      const bannerHeight = banner.offsetHeight;

      banner.style.backgroundPositionY = `${-scrollTop * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='snap-start bg-hero-pattern bg-no-repeat bg-cover w-screen md:w-screen text-white h-[100vh] overflow-hidden grid place-content-center'>
      <div ref={bannerRef} className='banner rounded-2xl h-[80vh] w-[80vw] flex justify-center flex-col items-center'>
        <h1 className='text-4xl text-white'>Hi, I'm <span className='font-extrabold'>Teja</span></h1>
        <p className='my-2 text-2xl font-semibold'>I am a <Typewriter texts={['Full Stack Developer','React JS Developer', 'Frontend Developer', 'Mern Stack Developer']} /></p>
        <Link to="/contact" className='text-center border-2 border-third p-2 rounder-lg w-[150px] m-3 hover:bg-third hover:text-black font-semibold transition ease-in-out rounded-lg'>Contact Me</Link>
      </div>
    </div>
  )

}

export default Banner;
