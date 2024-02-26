import React from 'react';
import priyanka from '../images/priyanka.webp';
import haarvish from '../images/haarvish.webp';

function About() {
  return (
    <div id="about" className='h-auto mt-10'>
      <h3 className='text-green-400 text-2xl text-center font-bold'>Who are we?</h3>
      <div className='flex flex-1 gap-10' >
        <div></div>
        <img src={priyanka} className={`w-40 h-40 object-cover rounded-lg transition duration-300 ease-in-out transform`} />
        <p className='text-green-200' ><span className='font-bold text-lg' >Hai! I'm Priyanka J</span><br></br>I'm working as Software Developer @ Circle Health. I have 2 years of experience in Software Development.</p>
      </div>
      <div className='flex flex-1 gap-10' >
        <img src={haarvish} className={`w-40 h-40 object-cover rounded-lg transition duration-300 ease-in-out transform`} />
        <p className='text-green-200' ><span className='font-bold text-lg' >Hai! I'm Haarvish C</span><br></br>I'm working as Software Developer @ Bluejay. I'm tech-enthusiast and excited to keep learning more.</p>
      </div>
      
    </div>
  )
}

export default About