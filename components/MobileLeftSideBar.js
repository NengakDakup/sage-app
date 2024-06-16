import React from 'react'
import { ChevronLeft, SquarePlus } from 'lucide-react';
import { Button } from './ui/button'
import CourseMenuItem from './CourseMenuItem';

const MobileCourseItemsMenu = ({setMobileLeftToggled}) => {
  return (
    <div className='bg-blue-darkest w-[330px] h-full flex flex-col justify-center items-start fixed z-100000'>
        <div className='w-full flex justify-between items-center pt-16 px-4'>
            <p className='text-[17px] font-bold'>My Courses</p>
            <ChevronLeft onClick={() => setMobileLeftToggled(false)} />
        </div>

        <div className='flex flex-col w-full mt-12 gap-4 px-4'>
            <Button className={`w-full py-6 gap-4 $justify-center`} variant="dark-dashed">
                <SquarePlus />
                New Course
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

export default MobileCourseItemsMenu