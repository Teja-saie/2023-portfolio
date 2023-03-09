import React from 'react'
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import  useWindowSize from "../Hooks/UseScale"

const Banner = () => {
    const { width, height } = useWindowSize();
  return (
    <div className='w-screen text-white text-center flex justify-center flex-col items-center bg-glassmorph rounded-2xl max-w-[80%] h-[80vh]'>
        <Confetti width={width} height={height} numberOfPieces={100} recycle={false} confettiSource={{x: width/2,y: 0,w: 0,h: 0}}/>
        <h1 className='text-3xl text-white'>Hello welcome to my website</h1>
        <p>Hi Friends welcome to my portfolio</p>
        <Link to="/contact" className='border-2 border-third p-2 rounder-lg w-[100px] m-3 hover:bg-third hover:text-black font-semibold transition ease-in-out rounded-lg'>Contact us</Link>

    </div>
  )
}

export default Banner