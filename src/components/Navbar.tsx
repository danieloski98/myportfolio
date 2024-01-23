import React from 'react'
import { IoMoonOutline } from 'react-icons/io5'

function Navbar() {
  return (
    <div className='w-full h-24 flex justify-between px-10 fixed bg-transparent'>
        <div className='flex items-center'>
            <p className='font-Roboto-Bold text-3xl text-white'>Daniel</p>
        </div>
        <div className='flex justify-end items-center'>
            <p className='font-Roboto-Medium text-lg text-black mx-12 cursor-pointer'>Home</p>
            <p className='font-Roboto-Medium text-lg text-black mx-12 cursor-pointer'>About Me</p>
            <p className='font-Roboto-Medium text-lg text-black mx-12 cursor-pointer'>Portfolio</p>
            <button className='w-40 h-12 mx-12 bg-blue-500 color-white font-Roboto-Regular text-md text-white'>Contact Me</button>
            <IoMoonOutline className='mx-12 text-black text-2xl cursor-pointer' />
        </div>
    </div>
  )
}

export default Navbar