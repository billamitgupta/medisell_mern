import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '/Users/shekhargupta/Desktop/medi_sell/medisell/src/style/body.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Body() {
  
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className='m-8 rounded- hover:m-3 hover:border-solid  shadow-xl'><Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg' alt='image1'></img></SwiperSlide>
        <SwiperSlide><img src='https://cms-contents.pharmeasy.in/banner/810889b6613-babycare-min.png?dim=700x0&dpr=1&q=100' alt='image1'></img></SwiperSlide>
        <SwiperSlide><img src='https://cms-contents.pharmeasy.in/banner/ed87375d79f-DiabeticCare-min.png' alt='image1'></img></SwiperSlide>
        <SwiperSlide><img src='https://cms-contents.pharmeasy.in/banner/03b538c95bb-abcfd6435fe-FragSB.jpeg' alt='image1'></img></SwiperSlide>
        <SwiperSlide><img src='https://cms-contents.pharmeasy.in/banner/041c47e32a2-CB_Beauty.jpg' alt='image1'></img></SwiperSlide>
        <SwiperSlide><img src='https://cms-contents.pharmeasy.in/banner/cea76587546-Personal-care_c.jpg' alt='image1'></img></SwiperSlide>
        <SwiperSlide><img src='https://cms-contents.pharmeasy.in/banner/8b30e5c1ffd-Celevida.png' alt='image1'></img></SwiperSlide>
        <SwiperSlide><img src='https://cms-contents.pharmeasy.in/banner/26e74905fde-d91d8a17483-b80e93634e8-Now-never_CB.jpg' alt='image1'></img></SwiperSlide>
        <SwiperSlide><img src='https://cms-contents.pharmeasy.in/banner/9b42ab4d9ab-home-page-banner_nutrition-.jpg' alt='image1'></img></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper></div>
    </>
  );
}
