import React from 'react'
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button'
const MobileCourseItemsMenu = ({toggled, setToggled}) => {
  return (
    <div className='bg-blue-darkest w-full h-[727px] rounded-t-xl'>
        <div className='w-full flex justify-between items-center'>
            <p>My Courses</p>
            <ChevronDown />
        </div>

        <div className='flex flex-col w-full mt-12 gap-4 px-4'>
            <Button className={`w-full py-6 gap-4 ${toggled? "justify-center" : "justify-start"}`} variant="dark-dashed">
                <SquarePlus />
                {!toggled && "My Course"}
            </Button>
        </div>
    </div>
  )
}

export default MobileCourseItemsMenu