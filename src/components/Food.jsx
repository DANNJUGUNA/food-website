import React, { useState } from 'react'
import {data} from '../data/data.js'
const Food = () => {
    const[foods,setFoods]=useState(data)
    console.log(foods)
  return (
    <div className=' max-w-[1240px] m-auto px-4 py-6'>
        <h1 className=' text-red-600 font-bold text-4xl text-center'>Our Top Rated Menus</h1>
        {/* {c} */}


        <div className=' flex flex-col lg:flex-row justify-between '>



            <div>
          <p className=' font-bold text-xl'>Filter With Category</p>
          <div className=' flex justify-between flex-wrap'>
            <button 
               className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                ALL
            </button>
            <button 
                 className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    Burgers
            </button>
            <button 
                 className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    Pizza
            </button>
            <button 
                   className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    Salads
            </button>
            <button 
                className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    Chicken
            </button>
          </div>
          </div>


          <div>
            <p className=' font-bold text-xl'>Filter with Price</p>
            <div className=' flex justify-between max-w-[390px] w-full'>
                <button
                       className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    $
                </button>
                <button
                       className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    $$
                </button>
                <button
                     className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    $$$
                </button>
                <button
                      className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                   $$$$
                </button>
            </div>
        </div>
        

        </div>
    </div>
  )
}

export default Food