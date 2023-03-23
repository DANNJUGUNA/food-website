import React,{useState} from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import{BsFillCartFill, BsFillSafeFill} from 'react-icons/bs'
import{TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp }from 'react-icons/md'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
const Navbar = () => {
    const[navclose, setNavClose]=useState(false)
  return (
    <header className='py-3 mb-11 border-b '>
    <div className='max-w-[1340px] mx-auto mr-3 ml-3 flex justify-between items-center p-3'>
        <div className=' flex items-center gap-3'>
        <div onClick={()=>setNavClose(!navclose)} className=' cursor-pointer'>
            <AiOutlineMenu size={35}/>
        </div>
        <h1 className=' text-2xl sm:text-3xl lg:text-4xl font-bold'>
            Best <span className=' font-semibold text-red-600'>Cafe</span></h1>
        <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[19px]'>
            <p className=' bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div>
       </div>
       <div className=' bg-gray-200 rounded-full flex items-center px-2 w-[200px]
        sm:w-[300px] lg:w-[400px]'>
            <AiOutlineSearch size={25} className='text-red-600'/>
            <input className=' bg-transparent p-2 focus:outline-none w-full' type='text'
             placeholder='Search food...'/>
       </div>
       <button className=' bg-black text-white text-lg hidden md:flex
        items-center py-2'>
        <BsFillCartFill size={25} className='mr-2'/> Chart
       </button>

       
       {navclose?<div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>:""}


            <div className={navclose ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 
            'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} 
                onClick={()=>setNavClose(!navclose)}
                className=' absolute right-4 top-4 cursor-pointer'/> 
                <h2 className='text-2xl p-4 font-bold'> Best <span className=' font-semibold text-red-600'>Cafe
                </span></h2>
                <nav>
                    <ul className=' flex flex-col p-4 text-grey-800'>
                        <li className='text-xl py-4 flex '><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
                        <li className='text-xl py-4 flex '><MdFavorite size={25} className='mr-4'/>Favorites</li>
                        <li className='text-xl py-4 flex '><FaWallet size={25} className='mr-4'/>Wallet</li>
                        <li className='text-xl py-4 flex '><MdHelp size={25} className='mr-4'/>Help</li>
                        <li className='text-xl py-4 flex '><AiFillTag size={25} className='mr-4'/>Promotions</li>
                        <li className='text-xl py-4 flex '><BsFillSafeFill size={25} className='mr-4'/>Best Ones</li>
                        <li className='text-xl py-4 flex '><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>

                    </ul>
                </nav>
            </div>
       </div>
    
    </header>
  )
}

export default Navbar