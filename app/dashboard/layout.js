'use client'
import { DashboardHeader } from '@/components/DashboardHeader'
import LeftSideBar from '@/components/LeftSideBar'
import useWindowDimensions from '@/context/useWindowDimensions'
import React, {useState, useEffect} from 'react'

export default function DashboardLayout ({children}) {
  const [toggled, setToggled] = useState(false)
  const {width, height} = useWindowDimensions();

    useEffect(() => {
        if(width < 1200) setToggled(true)
    }, [width])

  return (
    <div className='flex flex-row w-screen h-screen overflow-hidden bg-blue-darkest'>
      <div className={`hidden md:block ${toggled? 'w-[80px]' : 'w-[260px]'}`}>
        <LeftSideBar toggled={toggled} setToggled={setToggled} />
      </div>
      <div className={`flex flex-col grow h-full relative ${toggled && 'w-4/5'}`}>
        <DashboardHeader />
        <div className='flex flex-row h-full'>
          {children}
        </div>
      </div>
    </div>
  )
}
