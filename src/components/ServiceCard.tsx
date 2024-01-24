import React from 'react'

interface IProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: IProps) {
  return (
    <div className="w-[30%] h-[200px] bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
        {icon}
        <h3 className='text-gray-600 font-Roboto-Medium text-3xl'>{title}</h3>
        <p className='text-gray-500 font-Roboto-Light text-xl'>{description}</p>
        <button className='w-56 h-14 bg-blue-500 text-xl text-white font-Roboto-Regular'>Know More</button>
    </div>
  )
}

export default ServiceCard