import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Transition } from 'react-transition-group';

const duration = 0.5;

const defaultStyle = {
  transition: `opacity ${duration}s ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      gsap.to('.about-title', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
      });
      gsap.to('.about-text', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.out',
      });
    }, 1500);
  }, []);

  return (
    <Transition in={!loading} timeout={duration * 1000}>
      {(state) => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }} className={`flex flex-col items-center justify-center h-screen ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014.707 5.293h2.58a1 1 0 110 2h-2.58a6 6 0 106.001 6.001h-2.58a1 1 0 110-2h2.58a3.999 3.999 0 11-3.292 1.707z"></path>
              </svg>
              <span className="ml-2 text-white">Loading...</span>
            </div>
          ) : (
            <div className="max-w-md rounded-lg overflow-hidden shadow-lg p-6 transform -translate-y-10" style={{background: 'linear-gradient(to bottom right, #3182CE, #8B5CF6)'}}>
              <h1 className="about-title text-4xl font-bold mb-4 text-white">About Us</h1>
              <p className="about-text text-center text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
                Duis dapibus justo a est facilisis, id facilisis ante efficitur. <br></br>
                Sed eget orci condimentum, tincidunt elit eu, lacinia eros.
              </p>
            </div>
          )}
        </div>
      )}
    </Transition>
  );
};

export default About;
