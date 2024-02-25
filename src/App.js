import './App.css';
import Home from './Home';
import Background from './components/background';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './components/useMousePosition';

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
        {/*<p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
      </p>*/}
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
