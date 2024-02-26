import React from 'react';
import insta from '../images/instagram.svg';
import github from '../images/github.svg';
import gmail from '../images/gmail.svg';

function Footer() {
  return (
    <div className='w-screen h-auto mt-10' id="contact">
      <div className='flex flex-1 flex-col'>
        <h3 className='text-green-400 text-2xl font-bold text-center'>Contact Us!</h3>
        <div className='flex justify-center flex-1'>
          <div className='flex flex-col rounded-lg shadow-lg p-10 bg-green-950 gap-5'>
            <div className='mt-3'>
              <p className='text-green-200 ml-1'>Your Email</p>
              <input placeholder='example@mail.xyz' className='focus:border-none focus:outline-none w-80 text-lg p-1 text-black rounded-2xl bg-green-200' />
            </div>
            <div>
              <p className='text-green-200 ml-1'>Message</p>
              <textarea rows={7} placeholder='message...' className='focus:border-none leading-relaxed focus:outline-none w-80 text-lg p-1 text-black rounded-2xl bg-green-200' />
            </div>
            <div className='flex flex-1 justify-center'>
              <div className='w-48 h-10 shadow-xl text-green-500 font-bold rounded-full items-center flex justify-center text-center bg-green-800 hover:bg-green-900'>
                Send <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-1 gap-5 item-center justify-center mt-5 mb-5'>
        <a href='https://www.instagram.com/techtangoo/' target='__blank' ><img src={insta} className={`h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-110`} /></a>
        <a href='https://github.com/TechTangoo' target='__blank'><img src={github} className={`bg-white h-10 object-cover rounded-full transition duration-300 ease-in-out transform hover:scale-110`} /></a>
      </div>
      <div className='flex flex-1 gap-5 item-center justify-center mt-5 text-gray-500 '>
        <div>©2024 Priyanka J</div>
      </div>
    </div>
  )
}

export default Footer