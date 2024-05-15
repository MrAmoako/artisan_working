import React from 'react'

function Artisanspage() {
  return (
    <div className='flex justify-center items-center py-[100px]'>
     <div className='bg-white w-[250px] h-[200px] shadow-md rounded-md p-4 m-2'>
     <h1 className='pb-[70px] text-2xl'>Profile Picture</h1>
     <a href='/profile'
      className='bg-blue-500 text-white font-bold
       py-2 px-4 rounded focus:outline-none 
       focus:shadow-outline 
       transition ease-in-out delay-150 hover:-translate-y-1 
       hover:scale-110 hover:bg-blue-700 duration-300 ' >View Details</a>
     </div>

      <div className='bg-white w-[250px] h-[200px] shadow-md rounded-md p-4 m-2'>
      <h1 className='pb-[70px] text-2xl'>Update records</h1>
      <a href='/records'
      className='bg-blue-500 text-white font-bold
       py-2 px-4 rounded focus:outline-none 
       focus:shadow-outline 
       transition ease-in-out delay-150 hover:-translate-y-1 
       hover:scale-110 hover:bg-blue-700 duration-300 ' >View Details</a>
      </div>
      <div className='bg-white w-[250px] h-[200px] shadow-md rounded-md p-4 m-2'>
      <h1 className='pb-[70px] text-2xl'>Upload works</h1>
      <a href='/ugallery'
      className='bg-blue-500 text-white font-bold
       py-2 px-4 rounded focus:outline-none 
       focus:shadow-outline 
       transition ease-in-out delay-150 hover:-translate-y-1 
       hover:scale-110 hover:bg-blue-700 duration-300 ' >View Details</a>
      </div>
      </div>
  )
}

export default Artisanspage