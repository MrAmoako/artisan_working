import React from 'react';

function Footer() {
  return (
    <div className='bg-black w-full'>
      <div className="container mx-auto px-4 py-8">
        <h1 className='text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl text-left p-3'>Contact Us</h1>
        <div className="flex justify-between mt-8">
          <div className="w-1/3">
            <h2 className="text-xl font-bold mb-4 text-white text-left px-3">Address</h2>
            <p className="text-gray-300 text-left px-3">123 Street Name</p>
            <p className="text-gray-300 text-left px-3">City, State, Zip Code</p>
          </div>
          <div className="w-1/3">
            <h2 className="text-xl font-bold mb-4 text-white">Phone</h2>
            <p className="text-gray-300">123-456-7890</p>
          </div>
          <div className="w-1/3">
            <h2 className="text-xl font-bold mb-4 text-white">Email</h2>
            <p className="text-gray-300">example@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
