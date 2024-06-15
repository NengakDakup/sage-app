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
  import { Input } from "@/components/ui/input"
  import { Button } from '@/components/ui/button' 
  import { Copy } from 'lucide-react';
  
const GroupStudySessionLink = () => {
  return (
    <div>
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent className='gradient-border w-[562px]'> 
    <DialogHeader>
      <DialogTitle className='pb-4'>Group Study Session</DialogTitle>
      <DialogDescription className=''>
        <div className='relative'>
            <Label className="text-gray-600 text-xs" htmlFor="text">Enjoy the bliss of company. Share with your friends and mates.</Label>
            <Input id="input" type="input" className='' placeholder="https://sage.ai/gr/********" />
            <Button variant="light" className="w-[150px] h-[30px] flex justify-center items-center gap-1"><Copy className='w-3 h-3 text-white'/>Copy Link</Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default GroupStudySessionLink