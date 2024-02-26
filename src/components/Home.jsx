import React, { useRef, useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline';
import logo from '../images/logo.png'
import Marquee from "react-fast-marquee";

function Home() {

  const [hover, setHover] = useState(false);
  return (
    <div id="home" className='flex-col justify-center flex-1 items-center'>
      <Marquee className='text-white' style={{ fontSize: '150px', fontFamily:'"Bodoni Moda", serif'}}>
        WE ARE TECHTANGOO WE ARE TECHTANGOO
      </Marquee>
      <Marquee direction='right' className='text-green-300' style={{ fontSize: '150px', fontFamily: '"Bodoni Moda", serif' }}>
        WE ARE TECHTANGOO WE ARE TECHTANGOO
      </Marquee>
      <Marquee className='text-white' style={{ fontSize: '150px', fontFamily: '"Bodoni Moda", serif' }}>
        WE ARE TECHTANGOO WE ARE TECHTANGOO
      </Marquee>
    </div>
  )
}

export default Home