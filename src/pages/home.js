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
    <div>
   <Swiper {...homeSlider} getSwiper={setParallaxSwiper}>
     <div className="home-slider">
       <div className="slider-image" data-swiper-parallax={parallaxAmount} data-swiper-parallx-opacity={parallaxOpacity}>
      <img src={image2} alt="image1" />
   
       </div>
<div className="col-md-6 offset-md-3 my-auto text-center text-white content">
<h1 className="text-uppercase md-2 font-weight-bold">Slide 1</h1>
<p className="md-5 small"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>
     </div>
     {/* 2 */}
     <div className="home-slider">
       <div className="slider-image" data-swiper-parallax={parallaxAmount} data-swiper-parallx-opacity={parallaxOpacity}>
      <img src={image2} alt="image1" />
   
       </div>
<div className="col-md-6 offset-md-3 my-auto text-center text-white">
<h1 className="text-uppercase md-2 font-weight-bold">Slide 2</h1>
<p className="md-5 small"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>
     </div>
     {/* 3 */}
     <div className="home-slider">
       <div className="slider-image" data-swiper-parallax={parallaxAmount} data-swiper-parallx-opacity={parallaxOpacity}>
      <img src={image2} alt="image1" />
   
       </div>
<div className="col-md-6 offset-md-3 my-auto text-center text-white">
<h1 className="text-uppercase md-2 font-weight-bold">Slide 3</h1>
<p className="md-5 small"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>
     </div>
   </Swiper>
  <div className="container">
     <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Home pages</h1>
      <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
      </div>
      <div class="row mb-2">
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Design</strong>
          <h3 class="mb-0">Post title</h3>
          <div class="mb-1 text-muted">Nov 11</div>
          <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
  </div>
        </div>
   </div>
  );
}

export default Home;