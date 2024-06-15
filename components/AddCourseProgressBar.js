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
  <div className='min-w-[70%] md:w-screen'>
  <DialogContent className='gradient-border w-[392px] pl-5'>
    <DialogHeader>
      <DialogDescription className=' relative'>
      <Loader className='absolute left-12 top-7'/>
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='flex flex-col gap-3'>
                <p className='font-bold'>Uploading document</p>
                <p className='font-extrabold text-white'>Scanning Document</p>
                <p className='font-bold'>Finishing Up</p>
            </div>
            <Button variant="light" className="w-full">Hide</Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
  </div>
</Dialog>

    </div>
  )
}

export default AddCourseProgressBar