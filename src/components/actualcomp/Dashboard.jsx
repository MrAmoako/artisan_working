import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../images/back3.jpg";
import image2 from "../images/back3.avif";
import image3 from "../images/back2.jpg";

function Dashboard() {
  const textRef = useRef(null);
  const textReff = useRef(null);
 
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: 48,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2.5,
        delay: 0.5,
        ease: 'power3.out',
      }
    );
    
    gsap.fromTo(
      textReff.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      }
    );
  }, []);

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
    <div className=''>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-12 mt-[120px]">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 
              ref={textRef}
              className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black"
            >
              Need a service <br></br>or have a problem ?
            </h1>
            <p 
              ref={textReff}
              className="text-black  mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl  dark:text-gray-400"
            >
              just request for a service and we will be right there
            </p>
            <div className="flex flex-col lg:flex-row space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
              <a
                href="/clientSignup"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-left transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                Request a service
              </a>
              <a
                href="/signup"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-left transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                Become an Artisan
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end py-8 lg:py-0 px-[7.8px]">
            <div style={{ maxWidth: '600px', width: '100%' }}>
              <Slider {...sliderSettings} style={{ maxWidth: '100%', }}>
                <div>
                  <img src={image1} alt="Portrait 1" style={imageStyle} />
                </div>
                <div>
                  <img src={image2} alt="Portrait 2" style={imageStyle} />
                </div>
                <div>
                  <img src={image3} alt="Portrait 3" style={imageStyle} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
