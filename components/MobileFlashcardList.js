import React from 'react'
import { X, Album } from 'lucide-react';

const MobileFlashcardList = () => {
  return (
    <div className='bg-blue-darkest w-[330px] h-full'>
      <div className='flex justify-between items-center py-16 px-6'>
        <div className='flex gap-3'>
            <Album />
            <p className='font-bold'>My Flashcards</p>
        </div>
        <X className='text-[#FF7193]'/>
      </div>
    </div>
  )
}

export default MobileFlashcardList