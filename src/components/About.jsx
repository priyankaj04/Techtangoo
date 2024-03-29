import React from 'react';
import priyanka from '../images/priyanka.webp';
import haarvish from '../images/haarvish.webp';
import reacticon from '../images/React-icon.svg';
import nexticon from '../images/nextjs.svg';
import angularicon from '../images/angular.svg';
import blender from '../images/blender.svg';
import bootstrap from '../images/bootstrap.svg';
import django from '../images/django.svg';
import docker from '../images/docker.svg';
import express from '../images/express.svg';
import figma from '../images/figma.svg';
import gatsby from '../images/gatsby.svg';
import javascript from '../images/javascript.svg';
import materialui from '../images/material-ui.svg';
import node from '../images/nodejs.svg';
import postgresql from '../images/postgresql.svg';
import python from '../images/python.svg';
import redis from '../images/redis.svg';
import redux from '../images/redux.svg';
import threejs from '../images/threejs.svg';
import typescript from '../images/typescript.svg';
import mongodb from '../images/mongodb.svg';
import whyus1 from '../images/1.png'
import whyus2 from '../images/2.png'
import whyus3 from '../images/3.png'
import d3 from '../images/d3.svg';
import flutter from '../images/flutter.svg';
import graphql from '../images/graphql.svg';
import sass from '../images/sass.svg'
import tailwind from '../images/tailwind.svg'
import vue from '../images/vue.svg'

function About() {
  return (
    <div id="about" className='w-screen h-auto mt-10'>
      <h3 className='text-green-400 text-2xl text-center font-bold'>Who are we?</h3>
      <div className='flex flex-col lg:flex-row ml-10 xl:flex-row 2xl:flex-row gap-5'>
        <div className='flex flex-1 gap-5 items-center' >
          <img src={priyanka} className={`w-40 h-40 object-cover rounded-lg transition duration-300 ease-in-out transform`} />
          <p className='text-green-200' ><span className='font-bold text-lg' >Hai! I'm Priyanka J</span><br></br>I'm working as Software Developer @ Circle Health.<br></br> I have 2 years of experience in Software Development.</p>
        </div>
        <div className='flex flex-1 gap-5 items-center' >
          <img src={haarvish} className={`w-40 h-40 object-cover rounded-lg transition duration-300 ease-in-out transform`} />
          <p className='text-wrap text-green-200' ><span className='font-bold text-lg' >Hai! I'm Haarvish C</span><br></br>I'm working as Software Developer @ Bluejay.<br></br> I'm tech-enthusiast and excited to keep learning more.</p>
        </div>
      </div>
      <div className='mt-10'>
        <h3 className='text-green-400 text-2xl text-center font-bold'>Why Us?</h3>
        <div className='mt-5 flex flex-wrap justify-center flex-1 gap-5'>
          <img src={whyus1} className={`w-1/4 object-cover rounded-lg transition duration-300 ease-in-out transform shadow-md`} />
          <img src={whyus2} className={`w-1/4 object-cover rounded-lg transition duration-300 ease-in-out transform shadow-md`} />
          <img src={whyus3} className={`w-1/4 object-cover rounded-lg transition duration-300 ease-in-out transform shadow-md`} />
        </div>
      </div>
      <div className='mt-10'>
        <h3 className='text-green-400 text-2xl text-center font-bold' >Tech Stacks</h3>
        <div className='flex flex-wrap flex-1 gap-10 m-10'>
          <img src={reacticon} className={`w-12 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={nexticon} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={angularicon} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={blender} className={`h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={bootstrap} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={django} className={`h-10 object-cover transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={docker} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={express} className={`h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={figma} className={`h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={gatsby} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={javascript} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={materialui} className={`h-10 object-cover transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={node} className={`w-10  object-cover transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={postgresql} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={python} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={redis} className={`h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={redux} className={`h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={threejs} className={`h-10 object-cover transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={typescript} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={mongodb} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={d3} className={`h-10 object-cover transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={graphql} className={`h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={sass} className={`h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={tailwind} className={`h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={vue} className={`h-10 object-cover  transition duration-300 ease-in-out transform hover:scale-105`} />
          <img src={flutter} className={`w-10 h-10 object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105`} />
        </div>
      </div>
    </div>
  )
}

export default About