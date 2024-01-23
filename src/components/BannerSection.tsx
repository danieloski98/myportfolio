import React from 'react'

function BannerSection() {
  return (
    <div className='w-full h-full flex'>
        <div className='flex-[0.3] w-full h-full bg-blue-500'>
            {/* IMAGE BOX */}
            <div className='w-[600px] h-[600px] rounded-[600px] bg-blue-500 absolute left-[300px] top-[200px] p-3'>
                <div className='w-full h-full rounded-[300px] bg-white p-16'>
                    <div className="w-full h-full rounded-[300px] bg-blue-500"></div>
                </div>
            </div>
        </div>
        <div className='flex-[0.7] w-full h-full bg-white flex justify-center items-center'>
            <div className="flex">
                <div className="flex flex-col">
                    <h1 className='text-6xl text-gray-600 font-Roboto-Regular'>Daniel Emmanuel</h1>
                    <h1 className='text-4xl font-Roboto-Regular text-gray-500 mt-6'>Holla 👋</h1>
                    <p className='text-xl font-Roboto-Light mt-2'>Fullstack web and mobile application software engineer.</p>
                </div>

                <div></div>
            </div>
        </div>
    </div>
  )
}

export default BannerSection