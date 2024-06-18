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
  import { Button } from '@/components/ui/button' 
const AddFlashcard = () => {
  return (
    <div>
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <div className='min-w-[70%] md:w-screen'>
  <DialogContent className='md:gradient-border w-[350px] h-max rounded-xl px-8 md:w-full'>
    <DialogHeader>
      <DialogTitle className='pb-5'>Add A Flashcard</DialogTitle>
      <DialogDescription className='flex flex-col justify-center items-center gap-5'>

        <Input className='w-full' id="password1" type="text" placeholder="Give it a Name" />     
        <Input className='w-full h-[129px] pb-24 px-3'id="password1" type="text" placeholder="Note..." />
        <Button variant="light" className="w-full">Add Flashcard</Button>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
  </div>
</Dialog>

    </div>
  )
}

export default AddFlashcard