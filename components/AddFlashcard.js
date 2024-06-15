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
  import { useState } from 'react';

const AddFlashcard = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
      setText(e.target.value);
    };
  return (
    <div>
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent className='gradient-border w-[570px]'>
    <DialogHeader>
      <DialogTitle>Add A Flashcard</DialogTitle>
      <DialogDescription className='flex flex-col justify-center items-center gap-5'>

        <Input className='w-full' id="password1" type="text" placeholder="Give it a Name" />     
        <textarea
        id="myTextarea"
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={text}
        onChange={handleChange}
        rows="10"
        cols="30"
      />
        <Button variant="light" className="w-full">Add Flashcard</Button>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddFlashcard