import React from 'react'
import { X, Album } from 'lucide-react';
import { DashboardFlashcards } from './DashboardFlashcards';

const MobileFlashcardList = () => {
  return (
    <div className='bg-blue-darkest w-[330px] h-full  px-6'>
      <div className='flex justify-between items-center py-16'>
        <div className='flex gap-3'>
            <Album />
            <p className='font-bold'>My Flashcards</p>
        </div>
        <X className='text-[#FF7193]'/>
      </div>

      <DashboardFlashcards gradient={true}/>
      <DashboardFlashcards />
      <DashboardFlashcards />
      <DashboardFlashcards />
    </div>
  )
}

export default MobileFlashcardList