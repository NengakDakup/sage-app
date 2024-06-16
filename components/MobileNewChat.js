import React from 'react'
import Image from 'next/image'
import { ChevronDown, SquarePlus, Users } from 'lucide-react';
import { Button } from './ui/button'
import CourseMenuItem from './CourseMenuItem';

const MobileNewChat = ({toggled, setToggled}) => {
  return (
    <div className='bg-blue-darkest pt-16 w-full h-[727px] rounded-b-xl'>
        <div className='w-full flex justify-between items-center px-4'>
            <div className='flex justify-center items-center gap-2'>
                <Image src='/images/logo.png' alt='SageAI' width={36} height={36} />
                <p className='font-bold'>SAGE</p>
            </div>
            
            <ChevronDown />
        </div>
        
        <div className='flex justify-start items-end gap-1 px-4 pt-4'>
            <div className='rounded-full w-[44px] h-[44px] border border-solid border-gray-400'>
                <Image src='/images/placeholder-image.png' className='rounded-full w-[44px] h-[44px]' alt='SageAI' width={36} height={36} />
            </div>
             
            <div>
                <p className='text-xs'>John Doe</p>
                <p className='text-xs text-red-600'>Log Out</p>
            </div>
        </div>

        <div className='flex flex-col w-full mt-12 gap-4 px-4'>
            <Button className={`w-full py-6 gap-4 ${toggled? "justify-start" : "justify-center"}`} variant="dark-dashed">
                <SquarePlus />
                {!toggled && "New Chat"}
            </Button>

            <Button className={`w-full py-6 justify-start gap-4 border-white ${toggled? "justify-start" : "justify-center"}`} variant="outline">
                <Users />
                {!toggled && "Start a group Session"}
            </Button>
        </div>

        {!toggled &&
            <div className='flex flex-col w-full h-full overflow-y-scroll mt-6 py-6 px-3 gap-4 border-t border-purple-light'>
                <CourseMenuItem />
                <CourseMenuItem />
                <CourseMenuItem />


            </div>
        }
    </div>
  )
}

export default MobileNewChat