import React from 'react'
import { Badge } from '@/components/ui/badge'
import { useCourses } from '@/context/CoursesContext'

export const UserPrompt = () => {
  const {sendUserMessage, activeChat} = useCourses()
  if(!activeChat.messages) return (<div></div>)
  return (
    <div className='flex gap-2 pl-2 md:pl-12 w-full overflow-x-scroll hide-scrollbar'>
        <Badge className="text-nowrap" variant="prompt" onClick={() => sendUserMessage("Summarize this course")}>Summarize This Course</Badge>
        <Badge className="text-nowrap" variant="prompt" onClick={() => sendUserMessage("Start a quiz")}>Start A Quiz</Badge>
        <Badge className="text-nowrap" variant="prompt" onClick={() => sendUserMessage("Set a study reminder")}>Set a Study Reminder</Badge>
    </div>
  )
}
