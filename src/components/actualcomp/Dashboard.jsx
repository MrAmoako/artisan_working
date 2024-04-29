import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';


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

  return (
    <div
      className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 mt-[120px]"
   
    >
      <h1 
      ref={textRef}
      className=" mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
        Need a service or have a problem ?
      </h1>
      <p 
      ref={textReff}
      className="text-black p-4 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        just request for a service and we will be right there
      </p>
      <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a
          href="/client"
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
  );
}

export default Dashboard;
