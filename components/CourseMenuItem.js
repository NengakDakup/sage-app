'use client'
import { useCourses } from '@/context/CoursesContext'
import { BookMarked, EllipsisVertical, Pencil, Trash } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React, { useEffect, useState } from 'react'
import { PopoverArrow } from '@radix-ui/react-popover'
import { ThreeDots } from 'react-loader-spinner'
import { deleteCourse } from '@/api/course'

const CourseMenuItem = ({course}) => {
  const {activeCourse, setActiveCourse, removeCourse} = useCourses()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const openEdit = () => {
    setOpen(false)
  }

  const handleDelete = async () => {
    setLoading(true)
    try {
      const response = await deleteCourse({id: course._id})
      removeCourse(course._id)
    } catch(error){
      console.log(error);
    }
    setOpen(false)

  }

  useEffect(() => {
    setConfirmDelete(false)
    setLoading(false)
  }, [open])
  return (
    <div onClick={() => setActiveCourse(course._id)} className={`${activeCourse === course._id && 'bg-purple-light'} flex flex-row items-center justify-between w-full h-16 px-4 border border-purple-light rounded-md cursor-pointer hover:bg-purple-light`}>
        <div className='flex flex-row items-center justify-start gap-2'>
            <BookMarked className='w-6 h-6' />
            <div className='flex flex-col'>
                <p className='font-semibold'>{course.title}</p>
                <p className='text-slate-300 text-[10px]'>{course.files.length} document(s) submitted</p>
            </div>
        </div>
        
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className='rounded-full p-1 hover:bg-purple-lightest'>
              <EllipsisVertical className='w-5 h-5' />
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-blue-darkest border border-purple-light w-[100px] p-0" side="right">
            <PopoverArrow />
            <div className='flex flex-col w-full'>
              <div onClick={openEdit} className='flex flex-row gap-2 w-full items-center cursor-pointer hover:bg-purple-light pl-4 py-3'>
                <Pencil className='w-4 h-4' />
                <span className='text-sm'>Edit</span>
              </div>
              {!confirmDelete && 
                <div onClick={() => setConfirmDelete(true)} className='flex flex-row gap-2 w-full items-center cursor-pointer hover:bg-purple-light pl-4 py-3 text-red-400 border-t border-purple-light'>
                  <Trash className='w-4 h-4' />
                  <span className='text-sm'>Delete</span>
                </div>
              }
              {confirmDelete && 
                <div onClick={() => !loading && handleDelete()} className='flex flex-row gap-2 w-full items-center justify-center cursor-pointer bg-red-600 text-white pl-2 py-3 text-red-600 border-t border-purple-light'>
                  {(loading && confirmDelete) && <ThreeDots className="justify-self-center" color="#fff"  height="17" width="17" />}
                  {!loading && 
                    <>
                      <Trash className='w-4 h-4' />
                      <span className='text-xs'>Confirm ?</span>
                    </>
                  }
                  
                </div>
              }

            </div>
          </PopoverContent>
        </Popover>
          

    </div>
  )
}
export default CourseMenuItem