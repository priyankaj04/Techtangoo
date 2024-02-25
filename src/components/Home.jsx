import React, { useRef, useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline';
import logo from '../images/logo.png'

function Home() {

  const [hover, setHover] = useState(false);
  return (
    <div id="home" className='h-screen flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col justify-center flex-1 items-center'>
      <div className='justify-center flex-1 mt-16 text-3xl'>
        <h3 className='font-bold text-center text-green-400' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Hell⊙ There!</h3>
        <h2 className='font-bold text-center text-white flex justify-center' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>We are TechTang
          <span>
            <img src={logo} width='40px' className='p-0 m-0 mt-2' /></span></h2>
      </div>
      <div className='mt-10'>
        <h2 className='text-green-400 font-bold text-center text-2xl mb-0'>Transforming Ideas into Impactful Designs</h2>
        <p className='text-white font-bold text-md text-center mt-0'>
          <span className='text-green-200 text-lg'>From Concept to Creation, Your Vision, Our Expertise.</span><br />
          We are dedicated to providing unparalleled service tailored to your business's unique needs.
        </p>
      </div>
      {/*<Spline scene="https://prod.spline.design/adabPntTxRtyYAhD/scene.splinecode" />*/}
    </div>
  )
}

export default Home