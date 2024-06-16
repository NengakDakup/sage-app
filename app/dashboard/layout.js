'use client'
import { DashboardHeader } from '@/components/DashboardHeader'
import LeftSideBar from '@/components/LeftSideBar'
import MobileFlashcardList from '@/components/MobileFlashcardList'
import MobileCourseItemsMenu from '@/components/MobileLeftSideBar'
import useWindowDimensions from '@/context/useWindowDimensions'
import React, {useState, useEffect} from 'react'

export default function DashboardLayout ({children}) {
  const [toggled, setToggled] = useState(false)
  const [mobileLeftToggled, setMobileLeftToggled] = useState(false)
  const [mobileRightToggled, setMobileRightToggled] = useState(false)
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
        <DashboardHeader setMobileLeftToggled={setMobileLeftToggled} setMobileRightToggled={setMobileRightToggled} />
        <div className='flex flex-row h-full pt-20 md:pt-24'>
          {children}
        </div>
      </div>
      {mobileLeftToggled && <MobileCourseItemsMenu setMobileLeftToggled={setMobileLeftToggled} />}
      {mobileRightToggled && <MobileFlashcardList setMobileRightToggled={setMobileRightToggled} />}
    </div>
  )
}
