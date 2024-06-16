import React from 'react'
import { Userchat } from './Userchat';
import { SageAiChat } from './SageAiChat'
import { WelcomeChat } from './WelcomeChat';
import { UserPrompt } from './UserPrompt';
import ChatInput from './ChatInput';

const DashboardChat = () => {
  return (
    <div className='flex flex-col grow border-r border-purple-light px-3 pt-8 overflow-y-scroll overflow-x-hidden relative'>
      
      <div className='flex flex-col gap-4 w-full max-w-[900px] mx-auto relative pb-[200px]'>
        <WelcomeChat/>
        <Userchat/>
        <SageAiChat/>
        <Userchat/>
        <SageAiChat/>
        <Userchat/>
        <SageAiChat/>
        <Userchat/>
        <SageAiChat/>
        <Userchat/>
        <SageAiChat/>
        <Userchat/>
        <SageAiChat/>
        <Userchat/>
        <SageAiChat/>
        <Userchat/>
        <SageAiChat/>
        <Userchat/>
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