import React from 'react'
import { Badge } from '@/components/ui/badge'

export const UserPrompt = () => {
  return (
    <div className='flex gap-2 pl-12'>
        <Badge variant="prompt">Summarize This Course</Badge>
        <Badge variant="prompt">Start A Quiz</Badge>
        <Badge variant="prompt">Set a Study Reminder</Badge>
    </div>
  )
}
