import React from 'react'
import Spline from '@splinetool/react-spline';

function Home() {
  return (
    <div id="home" className='h-screen'>
      <div className='flex lg:flex-row md:flex-col sm:flex-col justify-center flex-1 items-center'>
        <div className=''>
          <h3>Hello There!</h3>
          <h2>We are TechTangoo :)</h2>
        </div>
        <div className='w-1/2 h-96 justify-center bg-yellow-500'>
          <Spline width={"700px"} className='w-90' scene="https://prod.spline.design/adabPntTxRtyYAhD/scene.splinecode" />
        </div>
      </div>
    </div>
  )
}

export default Home