import React from 'react'
import CourseMenuItem from './CourseMenuItem'
import { useCourses } from '@/context/CoursesContext'
import { Skeleton } from './ui/skeleton'

const CourseList = () => {
    const {courses} = useCourses();
  return (
    <div className='flex flex-col w-full h-full overflow-y-scroll mt-6 py-6 gap-4 border-t border-purple-light px-3 md:px-0'>
        {courses.list.map((course, i) => <CourseMenuItem key={i} course={course} />)}
        {(courses.loading) && 
          <div className='flex flex-col w-full h-full overflow-y-scroll mt-6 py-6 gap-4 border-t border-purple-light px-3 md:px-0'>
              <Skeleton className="w-full h-12 px-2" />
              <Skeleton className="w-full h-12 px-2" />
              <Skeleton className="w-full h-12 px-2" />
              <Skeleton className="w-full h-12 px-2" />
          </div>
        }
    </div>
  )
}

export default CourseList