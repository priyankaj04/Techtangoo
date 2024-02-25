import React, { useRef, useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline';
import logo from '../images/logo.png'

function Home() {

  const [hover, setHover] = useState(false);
  return (
    <div id="home" className='flex-col justify-center flex-1 items-center'>
      <div className='justify-center flex-1 mt-16 text-3xl'>
        <h3 className='font-bold text-center text-green-400' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Hell⊙ There!</h3>
        <h2 className='font-bold text-center text-white flex justify-center' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>We are TechTang
          <span>
            <img src={logo} width='40px' className='p-0 m-0 mt-2' /></span></h2>
      </div>
      <div className='mt-10 flex items-center gap-5 justify-center lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col flex-col h-11/12'>
        <div className='w-3/5 flex flex-col text-wrap lg:ml-20 xl:ml-20 2xl:ml-20 gap-2'>
          <h2 className='text-green-400 font-bold text-center lg:text-3xl xl:text-3xl 2xl:text-3xl text-xl mb-0'>Transforming Ideas into Impactful Designs</h2>
          <div className='text-white font-bold lg:text-md xl:text-md 2xl:text-md text-sm text-center mt-0 text-wrap'>
            <span className='text-green-300'>From Concept to Creation, Your Vision, Our Expertise.</span>
            <br/>
            We are dedicated to providing unparalleled service tailored to your business's unique needs.
          </div>
        </div>
        <Spline scene="https://prod.spline.design/adabPntTxRtyYAhD/scene.splinecode" />
      </div>
    </div>
  )
}

export default Home