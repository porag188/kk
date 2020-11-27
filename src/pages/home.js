import React ,{useState} from 'react';
import './style/home.css'
// import 'swiper/css/swiper.css';
import 'swiper/swiper-bundle.css'
import Swiper from 'react-id-swiper';
import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';

const homeSlider={
  containerClass:'swiper-container home-slider',
  parallax:true,
  centeredSlides:true,
  speed:500,
  spaceBetween:0,
  effect:'slide'
};
function Home() {
  const [parallaxSwiper, setParallaxSwiper]=useState(null);
  const parallaxAmount=parallaxSwiper ? parallaxSwiper.width*0.95 : 0;
  const parallaxOpacity=0.5;
  return (
   <Swiper {...homeSlider} getSwiper={setParallaxSwiper}>
     <div className="home-slider">
       <div className="slider-image" data-swiper-parallax={parallaxAmount} data-swiper-parallx-opacity={parallaxOpacity}>
    <img src={image2} alt="image1" />
   
       </div>

     </div>
   </Swiper>
  );
}

export default Home;