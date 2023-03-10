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
    <div className='bg-hero-pattern bg-no-repeat bg-cover w-screen text-white h-[90vh] overflow-hidden grid place-content-center'>
      <div ref={bannerRef} className='banner bg-glassmorph rounded-2xl h-[80vh] w-[80vw] flex justify-center flex-col items-center'>
        <h1 className='text-3xl text-white'>Hello welcome to my website</h1>
        <p className='my-2 text-2xl font-semibold'>I am a <Typewriter texts={['Full Stack Developer','React JS Developer', 'Frontend Developer', 'Mern Stack Developer']} /></p>
        <Link to="/contact" className='border-2 border-third p-2 rounder-lg w-[100px] m-3 hover:bg-third hover:text-black font-semibold transition ease-in-out rounded-lg'>Contact us</Link>
      </div>
    </div>
  )
}

export default Banner;
