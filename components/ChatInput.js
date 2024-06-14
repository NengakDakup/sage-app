import React from 'react'
import { Input } from '@/components/ui/input'
import { Plus, SendHorizontal } from 'lucide-react';

const ChatInput = () => {
  return (
    <div className='w-full flex gap-2 relative'>
        <div className='w-12 h-12 flex justify-center items-center rounded-full bg-[#252031]'>
            <Plus className='w-6 h-6' />
        </div>

        <Input id="text" type="text" className='w-full h-12 rounded-full bg-[#252031]' placeholder="Enter a prompt or message..." />
        
        <div className='w-8 h-8 rounded-full flex justify-center items-center  bg-gradient-to-b from-[#A109FF] to-[#4912FF] absolute right-3 bottom-[8.5px] cursor-pointer'>
            <SendHorizontal className='w-[18px] h-[18px]' />
        </div>
    </div>
  )
}

export default ChatInput