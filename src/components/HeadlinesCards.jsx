import React from 'react'

const HeadlinesCards = () => {
  return (
    <div className=' max-w-[1240px] mx-auto p-2 py-5 grid md:grid-cols-3 gap-6 '>
        <div className=' rounded-xl relative '>
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'> 
                <p className=' font-bold text-2xl px-2 pt-4'>Make Your Order </p>
                <p className='px-2 font-semibold'>We Are Available 24/7</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4 font-semibold'>Order Now</button>
            </div>
            <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="food2" />
        </div>
        <div className=' rounded-xl relative '>
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'> 
                <p className=' font-bold text-2xl px-2 pt-4'>We Deliver At Your Door Step</p>
                <p className='px-2 font-semibold'>3-4hrs You Get Your Order</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4 font-semibold'>Order Now</button>
            </div>
            <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="food2" />
        </div>
        <div className=' rounded-xl relative '>
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'> 
                <p className=' font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
                <p className='px-2 font-semibold '>Tasty Treats</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4 font-semibold'>Order Now</button>
            </div>
            <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/5175620/pexels-photo-5175620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="food2" />
        </div>
    </div>
  )
}

export default HeadlinesCards