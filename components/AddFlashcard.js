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
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add A Flashcard</DialogTitle>
      <DialogDescription className='flex flex-col justify-center items-center gap-5'>

        <Input className='w-full' id="password1" type="text" placeholder="Give it a Name" />     
        <Input className='w-full'id="password1" type="text" placeholder="Note" />
        <Button variant="light" className="w-full">Add Flashcard</Button>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddFlashcard