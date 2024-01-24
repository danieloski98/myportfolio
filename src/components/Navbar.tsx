'use client'
import { useDarkModeToggle } from '@/state/darkMode.state'
import React from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { CiMenuBurger } from "react-icons/ci";


function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkModeToggle((state) => state)
  return (
    <div className='w-full h-24 flex justify-between lg:px-10 sm:px-5 fixed bg-transparent'>
        <div className='lg:flex sm:hidden items-center'>
            <p className='font-Roboto-Bold text-3xl text-white'>Daniel</p>
        </div>

        <div className='lg:hidden sm:flex items-center'>
            <p className={`font-Roboto-Bold text-3xl ${isDarkMode ? 'text-white':'text-gray-700'}`}>Daniel</p>
        </div>


        <div className='lg:flex sm:hidden justify-end items-center'>
            <p className={`font-Roboto-Medium text-lg ${isDarkMode ? 'text-white':'text-black'} mx-12 cursor-pointer`}>Home</p>
            <p className={`font-Roboto-Medium text-lg ${isDarkMode ? 'text-white':'text-black'} mx-12 cursor-pointer`}>About Me</p>
            <p className={`font-Roboto-Medium text-lg ${isDarkMode ? 'text-white':'text-black'} mx-12 cursor-pointer`}>Portfolio</p>
            <button className='w-40 h-12 mx-12 bg-blue-500 color-white font-Roboto-Regular text-md text-white'>Contact Me</button>
            { !isDarkMode && <IoMoonOutline className='mx-12 text-black text-2xl cursor-pointer' onClick={() => toggleDarkMode()} /> }
            { isDarkMode && <IoSunnyOutline className='mx-12 text-white text-2xl cursor-pointer' onClick={() => toggleDarkMode()}  /> }
        </div>
        <div className='flex justify-end items-center lg:hidden'>
          <CiMenuBurger className='text-blue-500 text-2xl cursor-pointer'  /> 
          { !isDarkMode && <IoMoonOutline className='ml-5 text-black text-2xl cursor-pointer' onClick={() => toggleDarkMode()} /> }
          { isDarkMode && <IoSunnyOutline className='ml-5 text-white text-2xl cursor-pointer' onClick={() => toggleDarkMode()}  /> }
        </div>
    </div>
  )
}

export default Navbar