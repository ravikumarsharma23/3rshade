'use client';

import React from 'react';
import { useTheme } from '@/app/context/ThemeContext';

const ServicesHeader: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`services-header ${theme === 'dark' ? 'bg-black' : 'bg-white'} py-16 sm:py-24 md:py-32 lg:pt-[180px] lg:pb-[180px]`}>
      <div className="container px-4 md:px-[122px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
        <h2 className={`text-4xl ${theme === 'dark' ? 'text-white' : 'text-black'} sm:text-5xl md:text-6xl lg:text-[64px] font-bold`}>
        E-Commerce <br></br> Listing
        <br />
        </h2>
        <p className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-black'} max-w-md`}>
        Social Media Management isn't just posting – it's storytelling with a scroll-stopping strategy. We turn your account into a profile everyone can't help but follow, engage, and obsess over. It is what it is!         </p>
      </div>
    </div>
  );
};

export default ServicesHeader;