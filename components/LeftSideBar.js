import { ListMinus, Menu, SquarePlus, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import CourseMenuItem from './CourseMenuItem'

const LeftSideBar = ({toggled, setToggled}) => {
  return (
    <div className={`flex flex-col items-center w-full h-full overflow-x-hidden pt-10 border-r border-purple-light px-3`}>
        <div className={`w-full flex flex-row ${toggled? "justify-center" : "justify-between"}`}>
            {
            !toggled && 
                <span className='flex flex-row items-center gap-2 font-bold text-lg'>
                    <Image src="/images/logo.png" width={36} height={36} />
                    SAGE
                </span>
            }
            {
            toggled? 
                <Menu onClick={() => setToggled(!toggled)} className='cursor-pointer'/>
                :
                <ListMinus onClick={() => setToggled(!toggled)} className='cursor-pointer' />
            }
            
            
        </div>
        <div className='flex flex-col w-full mt-12 gap-4'>
            <Button className={`w-full py-6 gap-4 ${toggled? "justify-center" : "justify-start"}`} variant="dark-dashed">
                <SquarePlus />
                {!toggled && "New Course"}
            </Button>

            <Button className={`w-full py-6 justify-start gap-4 border-white ${toggled? "justify-center" : "justify-start"}`} variant="outline">
                <Users />
                {!toggled && "Start a group Session"}
            </Button>

        </div>
        
        {!toggled &&
            <div className='flex flex-col w-full h-full overflow-y-scroll mt-6 py-6 gap-4 border-t border-purple-light'>
                <CourseMenuItem />
                <CourseMenuItem />
                <CourseMenuItem />


            </div>
        }
    </div>
  )
}

export default LeftSideBar