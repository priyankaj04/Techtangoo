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
import dashboard3 from '../images/dashboard3.jpg'

function Services() {
  return (
    <div id="services" className='mt-10 h-screen'>
      <div>
        <h2 className='text-center font-bold text-green-400 text-2xl'>What we can build for you!!</h2>
      </div>
      <div className='grid grid-cols-2'>
        <div>
          <Swiper
            loop={true}
            effect={'cards'}
            grabCursor={true}
            navigation={true}
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
            className='w-84 h-80'>
            <SwiperSlide
              id="heroimage"
              className='relative cursor-pointer'
            >
              <img
                src={dashboard1}
                className={`w-84 h-80 object-cover rounded-lg transition duration-300 ease-in-out transform`}
              />
              <img
                src={dashboard2}
                className={`w-84 h-80 object-cover rounded-lg transition duration-300 ease-in-out transform`}
              />
              <img
                src={dashboard3}
                className={`w-84 h-80 object-cover rounded-lg transition duration-300 ease-in-out transform`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Services