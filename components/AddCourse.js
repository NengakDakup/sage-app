import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input" 
  import { FilePlus } from 'lucide-react';
const AddCourse = () => {
  return (
    <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add A Course</DialogTitle>
      <DialogDescription >
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <Input className='w-full' id="password1" type="text" placeholder="Course Name" />
            <Input className='w-full'id="password1" type="text" placeholder="Write a short description..." />
      </div>

      <div className='flex flex-col justify-center items-center gap-2  h-[134px] p-6 rounded-xl gradient-border '>
            <FilePlus />
            <p className='font-bold'>Upload Document</p>
            <p className='text-xs text-gray-600'>You need a minimum of 1 document</p>
      </div>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default AddCourse