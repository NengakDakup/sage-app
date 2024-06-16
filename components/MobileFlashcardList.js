import React from 'react'
import { X, Album } from 'lucide-react';
import { DashboardFlashcards } from './DashboardFlashcards';

const MobileFlashcardList = ({setMobileRightToggled}) => {
  return (
    <div className='bg-blue-darkest w-[330px] h-full px-6 fixed right-0'>
      <div className='flex justify-between items-center py-16'>
        <div className='flex gap-3'>
            <Album />
            <p className='font-bold'>My Flashcards</p>
        </div>
        <X className='text-[#FF7193]' onClick={() => setMobileRightToggled(false)}/>
      </div>
      <div className='flex flex-col gap-3'>
        <DashboardFlashcards gradient={true}/>
        <DashboardFlashcards />
        <DashboardFlashcards />
        <DashboardFlashcards />

      </div>

      
    </div>
  )
}

export default MobileFlashcardList