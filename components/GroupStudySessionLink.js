import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"
  
const GroupStudySessionLink = () => {
  return (
    <div>
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent className='gradient-border w-[562px]'> 
    <DialogHeader>
      <DialogTitle className='pb-4'>Group Study Session</DialogTitle>
      <DialogDescription>
      <Label className="text-gray-600 text-xs" htmlFor="text">Enjoy the bliss of company. Share with your friends and mates.</Label>
        
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default GroupStudySessionLink