import React from 'react'
import { ChevronLeft, SquarePlus, Users } from 'lucide-react';
import { Button } from './ui/button'
import AddCourseModal from './AddCourseModal';
import GroupStudySessionModal from './GroupStudySessionModal';
import CourseList from './CourseList';
import MobileNewChat from './MobileNewChat';

const MobileCourseItemsMenu = ({setMobileLeftToggled}) => {
  return (
    <div className='bg-blue-darkest w-[330px] h-full flex flex-col justify-center items-start fixed z-100000 md:hidden border-r border-purple-light'>
        <div className='w-full flex justify-between items-center pt-16 px-4'>
            <p className='text-[17px] font-bold'>My Courses</p>
            <ChevronLeft className='border rounded-full p-1 border-purple-light box-content active:bg-purple-light' onClick={() => setMobileLeftToggled(false)} />
        </div>

        <div className='flex flex-col w-full mt-12 gap-4 px-4'>
            <AddCourseModal>
                <Button className={`w-full py-6 gap-4 justify-start`} variant="dark-dashed">
                    <SquarePlus />
                    New Course
                </Button>
            </AddCourseModal>
            <GroupStudySessionModal>
                <Button className={`w-full py-6 justify-start gap-4 border-white justify-start`} variant="outline">
                    <Users />
                    Start a group Session
                </Button>
            </GroupStudySessionModal>
            

        </div>

        
        <CourseList />
        <MobileNewChat/>

    </div>
  )
}

export default MobileCourseItemsMenu