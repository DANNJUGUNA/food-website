import React, { useState } from 'react'
import {data} from '../data/data.js'
const Food = () => {
    const[foods,setFoods]=useState(data)

    const filterType=(category)=>{
         setFoods(
            data.filter((item)=>{
             return item.category===category
            })
         )
    }

    const filterPrice=(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price===price
            })
        )
    }
  return (
    <div className=' max-w-[1640px] m-auto px-4 py-6'>
        <h1 className=' text-red-600 font-bold text-4xl text-center'>Our Top Rated Menus</h1>
        {/* {c} */}


        <div className=' flex flex-col lg:flex-row justify-between '>



            <div>
          <p className=' font-bold text-xl'>Filter With Category</p>
          <div className=' flex justify-between flex-wrap'>
            <button onClick={()=>setFoods(data)}
               className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                ALL
            </button>
            <button  onClick={()=>filterType('burger')}
                 className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    Burgers
            </button>
            <button onClick={()=>filterType('pizza')}
                 className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    Pizza
            </button>
            <button onClick={()=>filterType('salad')}
                   className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    Salads
            </button>
            <button onClick={()=>filterType('chicken')}
                className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    Chicken
            </button>
          </div>
          </div>


          <div>
            <p className=' font-bold text-xl'>Filter with Price</p>
            <div className=' flex justify-between max-w-[390px] w-full'>
                <button onClick={()=>filterPrice('$')}
                       className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    $
                </button>
                <button onClick={()=>filterPrice('$$')}
                       className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    $$
                </button>
                <button onClick={()=>filterPrice('$$$')}
                     className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                    $$$
                </button>
                <button onClick={()=>filterPrice('$$$$')}
                      className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                   $$$$
                </button>
            </div>
        </div>           
        </div>



        <div className=' grid grid-cols-2 lg:grid-cols-5 pt-5  gap-6'>
        {foods.map((food,index)=>(
                      <div key={index} className=" border shadow-xl rounded-t-lg hover:scale-105 duration-300">
                        <img src={food.image} alt={food.name} 
                        className='w-full h-[230px] object-cover rounded-lg'
                        />
                        <div className='flex justify-between px-2 py-4'>
                            <p className=' font-semibold'>{food.name}</p>
                            <p>
                                <span className='bg-red-600 rounded-full p-1 text-white font-semibold'>{food.price}</span>
                            </p>
                        </div>
                      </div>
             ))} 
        </div>
    </div>
  )
}

export default Food