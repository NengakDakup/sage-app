import { BookMarked, EllipsisVertical } from 'lucide-react'
import React from 'react'

const CourseMenuItem = () => {
  return (
    <div className='flex flex-row items-center justify-between w-full h-16 px-4 border border-purple-light rounded-md cursor-pointer hover:bg-purple-light'>
        <div className='flex flex-row items-center justify-start gap-2'>
            <BookMarked className='w-6 h-6' />
            <div className='flex flex-col'>
                <p className='font-semibold'>Intro To AI</p>
                <p className='text-slate-300 text-[10px]'>2 documents submitted</p>
            </div>
        </div>
        <EllipsisVertical className='w-5 h-5' />

    </div>
  )
}

export default CourseMenuItem