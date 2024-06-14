import React, {useState} from 'react'

export default function DashboardLayout ({children}) {
  const [toggled, setToggled] = useState(false)

  return (
    <div className='flex flex-row w-screen h-screen overflow-hidden bg-blue-darkest'>
      <div className={`hidden md:block ${toggled? 'w-[80px]' : 'w-[260px]'}`}>
      </div>
      <div className={`flex flex-col grow h-full relative ${toggled && 'w-4/5'}`}>
        <div className='flex flex-row h-full pt-24'>
          {children}
        </div>
      </div>
    </div>
  )
}
