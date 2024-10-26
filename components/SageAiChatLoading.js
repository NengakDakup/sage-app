import React from 'react'
import { Label } from "@/components/ui/label"
import { ThreeDots } from 'react-loader-spinner'
export const SageAiChatLoading = () => {
  return (
    <div className='self-start'>
        <Label className="text-[#9473FF] text-[8px]" htmlFor="Text">SAGE AI</Label>
        <div className='gradient-border p-3 rounded-lg text-[12px] max-w-[500px] text-wrap'>
          <ThreeDots
            height="30"
            width="30"
            radius="9"
            color="#fff"
           />
        </div>
    </div>
  )
}
