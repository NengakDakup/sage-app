import React from 'react'
import { Userchat } from './Userchat';
import { SageAiChat } from './SageAiChat'
import { WelcomeChat } from './WelcomeChat';
import { UserPrompt } from './UserPrompt';
import ChatInput from './ChatInput';

const DashboardChat = () => {
  return (
    <div className='flex flex-col grow border-r border-purple-light pt-8 px-3 overflow-y-scroll relative'>
      
      <div className='flex flex-col gap-4 w-full max-w-[900px] mx-auto relative'>
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
      

      <div className='flex flex-col w-full h-min gap-2 sticky bottom-0 bg-blue-darkest py-4'>
        <div className='flex flex-col gap-2 w-full max-w-[700px] mx-auto'>
          <UserPrompt/>
          <ChatInput />
        </div>
      </div>
    </div>
  )
}
export default DashboardChat