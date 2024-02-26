import './App.css';
import Home from './Home';
import Background from './components/background';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './components/useMousePosition';
import Marquee from "react-fast-marquee";

function App() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 50;

  return (
    <div className='main min-h-screen' style={{ width: '100vw', background: '#001302' }}>
      <motion.div
        className='mask h-screen fixed'
        animate={{
          WebkitMaskPosition: `${parseInt(x-(size/2))}px ${parseInt(y-(size/2))}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div id="home" className='flex-col justify-center flex-1 items-center'>
          <Marquee onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} className='text-white' style={{ fontSize: '150px', fontFamily: '"Bodoni Moda", serif' }}>
            WE ARE TECHTANGOO WE ARE TECHTANGOO
          </Marquee>
          <Marquee onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} direction='right' className='text-green-300' style={{ fontSize: '150px', fontFamily: '"Bodoni Moda", serif' }}>
            WE ARE TECHTANGOO WE ARE TECHTANGOO
          </Marquee>
          <Marquee onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} className='text-white' style={{ fontSize: '150px', fontFamily: '"Bodoni Moda", serif' }}>
            WE ARE TECHTANGOO WE ARE TECHTANGOO
          </Marquee>
        </div>
      </motion.div>
      <div className='body fixed overflow-x-hidden overflow-y-scroll flex flex-col'>
        <Home />
      </div>
      {/*
      <Background />
    */}

    </div>
  );
}

export default App;
