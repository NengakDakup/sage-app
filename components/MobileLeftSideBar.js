import React from 'react'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react';

const MobileLeftSideBar = () => {
  return (
    <div className='bg-blue-darkest pt-16 w-[330px] h-[852px]'>
        <div>
            <Image src='/images/logo.png' alt='SageAI' width={36} height={36} />
            <ChevronLeft />
        </div>
        
        <div>
            <Image src='/images/placeholder-image.png' alt='SageAI' width={36} height={36} /> 
        </div>
    </div>
  )
}

export default MobileLeftSideBar