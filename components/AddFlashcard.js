import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

const AddFlashcard = () => {
  return (
    <div>
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add A Flashcard</DialogTitle>
      <DialogDescription class>

        <Input className='w-full' id="password1" type="text" placeholder="Give it a Name" />     
        <Input className='w-full'id="password1" type="text" placeholder="Title of Document" />
        <Button variant="light" className="w-full">Add Flashcard</Button>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddFlashcard