import React from 'react'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react';

const MobileLeftSideBar = () => {
  return (
    <div className='bg-blue-darkest pt-16 w-[330px] h-[852px]'>
        <div className='w-full flex justify-between items-center'>
            <Image src='/images/logo.png' alt='SageAI' width={36} height={36} />
            <ChevronLeft />
        </div>
        
        <div className='flex justify-start items-end gap-1'>
            <div>
                <Image src='/images/placeholder-image.png' className='rounded-full w-[44px] h-[44px]' alt='SageAI' width={36} height={36} />
            </div>
             
            <div>
                <p className='text-xs'>John Doe</p>
                <p className='text-xs text-red-600'>Log Out</p>
            </div>
        </div>
    </div>
  )
}

export default MobileLeftSideBar