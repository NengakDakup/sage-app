import { EllipsisVertical, MessageSquare } from 'lucide-react'
import React from 'react'

import TimeAgo from 'javascript-time-ago'

// English.
import en from 'javascript-time-ago/locale/en'
import { useCourses } from '@/context/CoursesContext'

TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')



const ChatHistoryItem = ({chat}) => {
  const {activeChat, setActiveChat} = useCourses()
  let bgColor = (activeChat._id === chat._id) && 'bg-purple-light';
  return (
    <div onClick={() => setActiveChat(chat)} className={`flex flex-row items-center justify-between w-full h-12 px-2 border border-purple-light rounded-md cursor-pointer hover:bg-purple-light ${bgColor}`}>
        <div className='flex flex-row items-center justify-start gap-2'>
            <MessageSquare className='w-6 h-6' />
            <div className='flex flex-col overflow-hidden'>
                <p className='w-[100px] text-[10px] font-semibold truncate'>{chat.title}</p>
                <p className='text-slate-300 text-[10px]'>{timeAgo.format(new Date(chat.updatedAt))}</p>
            </div>

        </div>
        <EllipsisVertical className='w-5 h-5' />
    </div>
  )
}
export default ChatHistoryItem