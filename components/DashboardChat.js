'use client'
import React, { useEffect, useState } from 'react'
import { Userchat } from './Userchat';
import { SageAiChat } from './SageAiChat'
import { WelcomeChat } from './WelcomeChat';
import { UserPrompt } from './UserPrompt';
import ChatInput from './ChatInput';
import { useCourses } from '@/context/CoursesContext';
import { SageAiChatLoading } from './SageAiChatLoading';

const DashboardChat = () => {
  const {activeChat, courses, messageLoading} = useCourses()
  const [courseName, setCourseName] = useState('')

  useEffect(() => {
    let filtered = courses.list.filter(course => activeChat.course === course._id)
    if(filtered.length > 0) setCourseName(filtered[0].title)
  }, [activeChat])
  
  return (
    <div className='flex flex-col grow border-r border-purple-light px-3 pt-8 overflow-y-scroll overflow-x-hidden relative'>
      
      <div className='flex flex-col gap-4 w-full max-w-[900px] h-full mx-auto relative pb-[200px]'>
        {(courseName && activeChat) && <p>{courseName} : {activeChat.title}</p>}
        {(!courseName || !activeChat) && <WelcomeChat text="Select or Upload a course to get started" />}
        {activeChat.type === "new" && <WelcomeChat/>}
        {activeChat?.messages?.map(message => {
          if(message.role === 'user'){
              return <Userchat message={message} />
          } else {
              return <SageAiChat message={message} />
          }
        })}
        {messageLoading && <SageAiChatLoading />}
      </div>
      

      <div className='flex flex-1 flex-col md:w-full h-min gap-2 fixed md:sticky bottom-0 left-0 right-0 w-screen bg-blue-darkest py-4'>
        <div className='flex flex-col gap-2 w-full max-w-[700px] mx-auto'>
          <UserPrompt/>
          <ChatInput />
        </div>
      </div>
    </div>
  )
}
export default DashboardChat