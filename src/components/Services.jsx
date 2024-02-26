import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import { Keyboard, Pagination, Autoplay, Navigation, EffectCards, EffectCoverflow } from 'swiper/modules';
import dashboard1 from '../images/dashboard1.png';
import dashboard2 from '../images/dashboard2.png';
import dashboard3 from '../images/dashboard3.jpg';
import { useSwiperSlide } from 'swiper/react';
import fullstack1 from '../images/fullstack1.png';
import fullstack2 from '../images/fullstack2.png';
import fullstack3 from '../images/fullstack3.png';
import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';
import landing3 from '../images/landing3.png';
import mobile1 from '../images/mobile1.png';
import mobile2 from '../images/mobile2.png';
import mobile3 from '../images/mobile3.jpg'

function Services() {
  const swiperSlide = useSwiperSlide();

  return (
    <div id="services" className='mt-10 h-auto'>
      <div>
        <h2 className='text-center font-bold text-green-400 text-2xl'>What we can build for you!!</h2>
      </div>
      <div className='mt-10 flex justify-center'>
        <div className='grid justify-center items-center gap-20 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 ml-5 md:ml-20 lg:ml-20 xl:ml-20 2xl:ml-20'>
          <div className=''>
            <p className='text-green-500 font-bold text-xl'>Dashboards</p>
            <Swiper
              className='w-80 h-76'
              loop={true}
              effect={'cards'}
              grabCursor={true}
              slidesPerView={'auto'}
              keyboard={{
                enabled: true,
              }}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              cardsEffect={{
                stretch: 100,
                depth: 50,
                modifier: 2.5,
              }}
              modules={[Keyboard, Autoplay, Pagination, Navigation, EffectCards, EffectCoverflow]}
            >
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={dashboard1}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={dashboard2}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={dashboard3}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=''>
            <p className='text-green-500 font-bold text-xl' >Cross-Platform Mobile Apps</p>
            <Swiper
              className='w-80 h-76'
              loop={true}
              effect={'cards'}
              grabCursor={true}
              slidesPerView={'auto'}
              keyboard={{
                enabled: true,
              }}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              cardsEffect={{
                stretch: 100,
                depth: 50,
                modifier: 2.5,
              }}
              modules={[Keyboard, Autoplay, Pagination, Navigation, EffectCards, EffectCoverflow]}
            >
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={mobile1}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={mobile2}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={mobile3}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=''>
            <p className='text-green-500 font-bold text-xl'>Fullstack Web/App</p>
            <Swiper
              className='w-80 h-76'
              loop={true}
              effect={'cards'}
              grabCursor={true}
              slidesPerView={'auto'}
              keyboard={{
                enabled: true,
              }}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              cardsEffect={{
                stretch: 100,
                depth: 50,
                modifier: 2.5,
              }}
              modules={[Keyboard, Autoplay, Pagination, Navigation, EffectCards, EffectCoverflow]}
            >
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={fullstack1}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={fullstack2}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={fullstack3}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=''>
            <p className='text-green-500 font-bold text-xl'>Landing Page</p>
            <Swiper
              className='w-80 h-76'
              loop={true}
              effect={'cards'}
              grabCursor={true}
              slidesPerView={'auto'}
              keyboard={{
                enabled: true,
              }}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              cardsEffect={{
                stretch: 100,
                depth: 50,
                modifier: 2.5,
              }}
              modules={[Keyboard, Autoplay, Pagination, Navigation, EffectCards, EffectCoverflow]}
            >
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={landing1}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={landing2}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
              <SwiperSlide
                id="heroimage"
                className='cursor-pointer'
              >
                <img
                  src={landing3}
                  className={`w-80 h-76 object-cover rounded-lg transition duration-300 ease-in-out transform`}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services