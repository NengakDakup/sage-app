import React from 'react'
import { Badge } from '@/components/ui/badge'

export const UserPrompt = () => {
  return (
    <div className='flex gap-2 pl-12 w-full overflow-x-scroll'>
        <Badge className="text-nowrap" variant="prompt">Summarize This Course</Badge>
        <Badge className="text-nowrap" variant="prompt">Start A Quiz</Badge>
        <Badge className="text-nowrap" variant="prompt">Set a Study Reminder</Badge>
    </div>
  )
}
