'use client';
import BannerSection from '@/components/BannerSection';
import Navbar from '@/components/Navbar';
import React from 'react'

function HomePageView() {
  return (
    <div className='w-full h-screen bg-white'>
       <Navbar />
       <BannerSection />
    </div>
  )
}

export default HomePageView