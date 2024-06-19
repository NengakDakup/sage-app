import React from 'react'
import { Label } from "@/components/ui/label"
export const Userchat = ({message}) => {
  return (
    <div className='self-end'>
        <Label className="w-full text-gray-400 text-[8px] text-right" >USER</Label>
        <div className='border border-solid border-gray-600 p-3 rounded-lg text-[12px]'>
          {message.content}
        </div>
    </div>
  )
}
