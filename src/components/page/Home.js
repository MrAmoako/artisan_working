import React from 'react'
import Dashboard from '../actualcomp/Dashboard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import image1 from "../images/back3.jpg"
import image3 from "../images/back3.avif";
// import image4 from "../images/background.jpg";
// import image5 from "../images/plumber.avif";

function Home() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 
  };
  const imageStyle = {
    width: '100%', // Adjust width as needed
    maxHeight: '300px', // Adjust height as needed
    objectFit: 'cover', // Ensure images cover the entire space
    borderRadius: '8px' // Add border radius for rounded corners
  };
  return (
    <div >
    <Dashboard />
    <Slider {...sliderSettings} style={{ margin: '-100px auto', maxWidth: '600px' }}>
      <div>
        <img src={image1} alt="Portrait 1" style={imageStyle} />
      </div>
      <div>
        <img src={image3} alt="Portrait 2" style={imageStyle} />
      </div>
      <div>
        <img src={image3} alt="Portrait 3" style={imageStyle} />
      </div>
    </Slider>
  </div>
  )
}

export default Home