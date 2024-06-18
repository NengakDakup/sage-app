import React from 'react'
import CourseMenuItem from './CourseMenuItem'
import { useCourses } from '@/context/CoursesContext'

const CourseList = () => {
    const {courses} = useCourses();
  return (
    <div className='flex flex-col w-full h-full overflow-y-scroll mt-6 py-6 gap-4 border-t border-purple-light px-3 md:px-0'>
        {courses.list.map((course, i) => <CourseMenuItem key={i} course={course} />)}
    </div>
  )
}

export default CourseList