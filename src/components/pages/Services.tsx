import React from 'react'
import ServiceCard from '../ServiceCard'
import {FiCode} from 'react-icons/fi'
import { FaMobile } from "react-icons/fa6";
import { AiOutlineCloudServer } from "react-icons/ai";
import { SiAmazonapigateway } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { useDarkModeToggle } from '@/state/darkMode.state';

const LONG_TEXT = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel illo, est natus magnam deserunt aperiam doloribus quos, culpa recusandae ipsa obcaecati doloremque, odio veniam nostrum fugit enim iusto cupiditate dolorum aliquid tenetur. Eos excepturi possimus non. Labore unde voluptatem voluptas?';

function Services() {
  const { isDarkMode } = useDarkModeToggle((state) => state)
  return (
    <div className={`w-full h-[auto] sm:px-5 lg:px-10 flex flex-col lg:items-center lg:justify-center sm:justify-start sm:items-start ${isDarkMode ? 'bg-darkMain':'bg-white'} pt-32`}>
      <h1 className={`${isDarkMode?'text-white':'text-gray-800'} font-Roboto-Medium text-5xl text-center`}>The services i offer</h1>
      <div className='flex flex-wrap w-full justify-center mt-20 sm:flex-col lg:flex-row'>
        <ServiceCard icon={<FiCode className='text-blue-500 text-6xl' />} title='Web Development' description={LONG_TEXT} />
        <ServiceCard icon={<FaMobile className='text-blue-500 text-6xl' />} title='Mobile Development' description={LONG_TEXT} />
        <ServiceCard icon={<AiOutlineCloudServer className='text-blue-500 text-6xl' />} title='Backend Development' description={LONG_TEXT} />
        <ServiceCard icon={<SiAmazonapigateway className='text-blue-500 text-6xl' />} title='API Documentation' description={LONG_TEXT} />
        <ServiceCard icon={<FaServer className='text-blue-500 text-6xl' />} title='Server Management' description={LONG_TEXT} />
      </div>
    </div>
  )
}

export default Services