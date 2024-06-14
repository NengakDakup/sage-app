import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from '@/components/ui/button'
  import { Loader } from 'lucide-react';
const AddCourseProgressBar = () => {
  return (
    <div>
    <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent className='gradient-border w-[392px] pl-5'>
    <DialogHeader>
      <DialogDescription className=' relative'>
      <Loader className='absolute left-12 top-7'/>
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='flex flex-col gap-3'>
                <p className='font-bold'>Uploading document</p>
                <div className='flex justify-center items-center gap-2'><p className='font-extrabold'>Scanning Document</p></div>
                <p className='font-bold'>Finishing Up</p>
            </div>
            <Button variant="light" className="w-full">Hide</Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddCourseProgressBar