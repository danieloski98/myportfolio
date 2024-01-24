'use client';
import BannerSection from '@/components/pages/BannerSection';
import Navbar from '@/components/Navbar';
import React from 'react'
import Services from '@/components/pages/Services';

function HomePageView() {
  return (
    <div className='w-screen h-screen bg-white overflow-x-hidden'>
       <Navbar />
       <BannerSection />
       <Services />
    </div>
  )
}

export default HomePageView