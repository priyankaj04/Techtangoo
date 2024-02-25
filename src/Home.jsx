import { useEffect, useState } from 'react';
import HomePage from './components/Home';
import Footer from './components/Footer';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Marquee from "react-fast-marquee";

export default function Home() {
    const [cart, setCart] = useState(false);
    const [url, setUrl] = useState('home');
    
    return (
        <main className="bg-fixed bg-opacity-10 bg-no-repeat" style={{ backgroundRepeat: 'repeat', backgroundSize: 'contain', backgroundAttachment: 'fixed' }}>
            <div className="fixed z-50 w-screen flex-1 h-14 flex justify-center mt-5" >
                <div className='flex items-center lg:w-1/2 md:w-1/2 sm:w-3/4 w-3/4 h-14 rounded-full shadow-md' style={{ backgroundColor: 'rgba(74, 222, 128, 0.1)', backdropFilter: 'blur(10px)' }}>
                    <div className='flex flex-1 justify-evenly items-center'>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => setUrl('home')}
                        >
                            <div className='flex self-center cursor-pointer hover:scale-110' style={{ color: url === 'home' ? '#4ade80' : 'white', padding: 8, borderRadius: 25, fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-50" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <p className='hidden lg:flex md:hidden sm:hidden'>Home</p>
                            </div>
                        </Link>
                        <Link
                            activeClass="active"
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => setUrl('products')}
                        >
                            <div className='flex items-center cursor-pointer' style={{ background: url === 'products' ? '#d97706' : 'transparent', padding: 8, borderRadius: 25, color: url === 'products' ? 'white' : 'black', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>
                                <p className='hidden lg:flex md:hidden sm:hidden'>Products</p>
                            </div>
                        </Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => setUrl('about')}
                        >
                            <div className='flex items-center cursor-pointer' style={{ background: url === 'about' ? '#d97706' : 'transparent', padding: 8, borderRadius: 25, color: url === 'about' ? 'white' : 'black', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                                <p className='hidden lg:flex md:hidden sm:hidden'>About</p>
                            </div>
                        </Link>
                        <Link
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => setUrl('footer')}
                        >
                            <div className='flex items-center cursor-pointer' style={{ background: url === 'footer' ? '#d97706' : 'transparent', padding: 8, borderRadius: 25, color: url === 'footer' ? 'white' : 'black', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
                                <p className='hidden lg:flex md:hidden sm:hidden'>Contact Us</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Element name="home">
                <HomePage />
            </Element>
            <Marquee pauseOnHover className='bg-green-400 h-20 text-3xl'>
                TECHTANGOO TECHTANGOO TECHTANGOO TECHTANGOO TECHTANGOO TECHTANGOO TECHTANGOO TECHTANGOO TECHTANGOO  TECHTANGOO TECHTANGOO TECHTANGOO TECHTANGOO{" "}
            </Marquee>
            <Element name="footer">
                <Footer />
            </Element>
        </main>
    )
}