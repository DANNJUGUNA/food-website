import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4'>
        <div className='max-h-[500px relative ]'>
            <div className=' absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40
            flex flex-col justify-center items-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'>
                The <span className='text-red-500'>Best</span></h1>
            <h1 className='px-4 py-4 ml-6 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'>
                <span className='text-red-500'>Food</span> Delivery Site</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="image" />
        </div>
    </div>
  )
}

export default Hero