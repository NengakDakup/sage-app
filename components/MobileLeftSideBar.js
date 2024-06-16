import React from 'react'
import { ChevronDown, SquarePlus } from 'lucide-react';
import { Button } from './ui/button'
import CourseMenuItem from './CourseMenuItem';
const MobileCourseItemsMenu = ({toggled, setToggled}) => {
  return (
    <div className='bg-blue-darkest w-[330px] h-[852px] flex flex-col justify-center items-start'>
        <div className='w-full flex justify-between items-center'>
            <p>My Courses</p>
            <ChevronDown />
        </div>

        <div className='flex flex-col w-full mt-12 gap-4 px-4'>
            <Button className={`w-full py-6 gap-4 ${toggled? "justify-start" : "justify-center"}`} variant="dark-dashed">
                <SquarePlus />
                {!toggled && "My Course"}
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