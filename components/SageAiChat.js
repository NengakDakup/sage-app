import React from 'react'
import { Label } from "@/components/ui/label"
export const SageAiChat = ({message}) => {
  return (
    <div className='self-start'>
        <Label className="text-[#9473FF] text-[8px]" htmlFor="Text">SAGE AI</Label>
        <div className='gradient-border p-3 rounded-lg text-[12px] max-w-[500px] text-wrap'>
          {message.content}
        </div>
    </div>
  )
}
