import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useDarkModeToggle } from '@/state/darkMode.state';

function BannerSection() {
    const { isDarkMode } = useDarkModeToggle((state) => state);
  return (
    <div className='w-full h-full flex'>
        <div className={`flex-[0.3] w-full h-full ${isDarkMode?'bg-darkSecondary':'bg-blue-500'}`}>
            {/* IMAGE BOX */}
            <div className={`w-[600px] h-[600px] rounded-[600px] ${isDarkMode?'bg-darkSecondary':'bg-blue-500'} absolute left-[300px] top-[200px] p-3`}>
                <div className={`w-full h-full rounded-[300px] ${isDarkMode?'bg-darkMain':'bg-white'} p-16`}>
                    <div className={`w-full h-full rounded-[300px] ${isDarkMode?'bg-darkSecondary':'bg-blue-500'}`}></div>
                </div>
            </div>
        </div>
        <div className={`flex-[0.7] w-full h-full ${isDarkMode? 'bg-darkMain':'bg-white'} flex justify-center items-center`}>
            <div className="flex  w-full justify-center pr-20">
                <div className="flex flex-col flex-1 pl-[400px]">
                    <h1 className={`text-6xl ${isDarkMode?'text-white':'text-gray-600'} font-Roboto-Regular`}>Daniel Emmanuel</h1>
                    <h1 className={`text-4xl font-Roboto-Regular  mt-6 ${isDarkMode?'text-gray-300':'text-gray-500'}`}>Holla 👋</h1>
                    <p className={`text-xl font-Roboto-Light mt-2 w-96 ${isDarkMode?'text-gray-400':'text-gray-600'}`}>Welcome to my page, I'm a  Fullstack web and mobile application software engineer.</p>

                    <button className='w-56 h-14 bg-blue-500 text-lg text-white font-Roboto-Regular mt-4'>Contact Me</button>
                </div>

                <div className='flex flex-col justify-center items-end flex-[0.2]'>
                    <FaSquareGithub className='text-blue-500 text-4xl my-5' />
                    <FaLinkedin className='text-blue-500 text-4xl my-5' />
                    <FaTwitter className='text-blue-500 text-4xl my-5' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerSection