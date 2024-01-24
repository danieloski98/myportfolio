import { useDarkModeToggle } from '@/state/darkMode.state';
import React from 'react'

interface IProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: IProps) {
  const { isDarkMode } = useDarkModeToggle((state) => state)
  return (
    <div className={`lg:w-[25%] lg:h-[450px] sm:h-auto sm:py-16 lg:py-0 sm:w-full ${isDarkMode?'bg-darkSecondary': 'bg-[whitesmoke]'} shadow-xl flex flex-col justify-center items-center px-8 lg:mx-10 sm:mx-0 mb-10`}>
        {icon}
        <h3 className={`text-gray-600 font-Roboto-Medium text-3xl ${isDarkMode?'text-white':'text-black'} mt-4 text-center`}>{title}</h3>
        <p className={`text-gray-500 font-Roboto-Light text-lg mt-4 text-center ${isDarkMode?'text-gray-300':'text-gray-600'}`}>{description}</p>
        <button className='w-56 h-14 bg-blue-500 text-xl text-white font-Roboto-Regular mt-4'>Know More</button>
    </div>
  )
}

export default ServiceCard