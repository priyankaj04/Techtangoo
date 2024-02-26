import { useEffect, useState, Fragment } from 'react';
import HomePage from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import { Link, Button, Element, scroller, animateScroll as scroll, scrollSpy } from 'react-scroll';

const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        window.scrollTo(targetElement, {
            behavior: 'smooth',
            smooth: true,
            duration: 800,
        });
    }
};

export default function Home() {
    const [cart, setCart] = useState(false);
    const [url, setUrl] = useState('home');

    const handleSetActive = (to) => {
        console.log(to);
    };

    const handleScroll = (to) => {
        scroller.scrollTo(to, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 50
        });
    }

    



    return (
        <Fragment>
            {/*<div className="fixed flex-col items-center left-0 top-1/3" >
                <div className='flex flex-col z-50 rounded-full shadow-md' style={{ backgroundColor: 'rgba(74, 222, 128, 0.1)', backdropFilter: 'blur(10px)' }}>
                    <div className='flex flex-col justify-evenly items-center py-5 gap-10'>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => { setUrl('home');  handleScroll('home')}}
                            onSetActive={handleSetActive}
                        >
                            <div className='flex self-center cursor-pointer hover:scale-110 px-5' style={{ color: url === 'home' ? '#4ade80' : 'white', borderRadius: 25, fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                        </Link>
                        <Link
                            onSetActive={handleSetActive}
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => { setUrl('services');  handleScroll('services')}}
                        >
                            <div className='flex self-center cursor-pointer hover:scale-110 px-5' style={{ color: url === 'services' ? '#4ade80' : 'white', borderRadius: 25, fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                            </div>
                        </Link>
                        <Link
                            onSetActive={handleSetActive}
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => { setUrl('about');  handleScroll('about')}}
                        >
                            <div className='flex self-center cursor-pointer hover:scale-110 px-5' style={{ color: url === 'about' ? '#4ade80' : 'white', borderRadius: 25, fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            </div>
                        </Link>
                        <Link
                            onSetActive={handleSetActive}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => { setUrl('contact'); handleScroll('contact'); }}
                        >
                            <div className='flex self-center cursor-pointer hover:scale-110 px-5' style={{ color: url === 'contact' ? '#4ade80' : 'white', borderRadius: 25, fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
    </div>*/}
            <div>
                <Element name="home">
                    <HomePage />
                </Element>
                <Element name="services">
                    <Services />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="contact">
                    <Footer />
                </Element>
            </div>
        </Fragment>
    )
}