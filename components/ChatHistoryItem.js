import { EllipsisVertical, MessageSquare } from 'lucide-react'
import React from 'react'

const ChatHistoryItem = () => {
  return (
    <div className='flex flex-row items-center justify-between w-full h-12 px-2 border border-purple-light rounded-md cursor-pointer hover:bg-purple-light'>
        <div className='flex flex-row items-center justify-start gap-2'>
            <MessageSquare className='w-6 h-6' />
            <div className='flex flex-col overflow-hidden'>
                <p className='w-[100px] text-[10px] font-semibold truncate'>Benefits of AI in industrial rovolution</p>
                <p className='text-slate-300 text-[10px]'>Yesterday</p>
            </div>

        </div>
        <EllipsisVertical className='w-5 h-5' />
    </div>
  )
}

export default ChatHistoryItem