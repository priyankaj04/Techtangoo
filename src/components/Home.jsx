import React, { useRef, useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline';

function Home() {

  const [hover, setHover] = useState(false);
  return (
    <div id="home" className='h-screen flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col justify-center flex-1 items-center'>
      <div className='flex-1 mt-16 text-3xl'>
        <h3 className='font-bold text-center text-green-400' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Hello There!</h3>
        <h2 className='font-bold text-center text-white' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>We are TechTangoo ⊙⊙</h2>
      </div>
      {/*<Spline scene="https://prod.spline.design/adabPntTxRtyYAhD/scene.splinecode" />*/}
    </div>
  )
}

export default Home