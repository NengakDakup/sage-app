'use client'
import React, {useState, useRef} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input" 
import { Label } from '@/components/ui/label';
import { FilePlus } from 'lucide-react';
import { Image } from 'lucide-react';
import { File } from 'lucide-react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button'
import { validateCourseInput } from '@/common/validation';
import { createCourse } from '@/api/course';
import { isAxiosError } from 'axios';
import { ThreeDots } from 'react-loader-spinner';



const AddCourseModal = ({children}) => {
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef(null);
  const filesEndRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClick = () => {
    if (fileInputRef.current) {
        fileInputRef.current.click();
    }
  };

  const scrollToBottom = () => {
    if (filesEndRef.current) {
        filesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }
};

  const handleFile = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFormData({
        ...formData,
        files: [...formData.files, ...files]
      }); 
    }
    scrollToBottom()
  };

  const removeFile = (index) => {
    setFormData({
      ...formData,
      files: formData.files.filter((file, i) => i !== index)
    }); 
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()
    setErrors({})
    const {errors, isValid} = validateCourseInput(formData)
    if(!isValid) return setErrors(errors) 

    setLoading(true)
    try {
      const newFormData = new FormData();
      newFormData.append("title", formData.title)
      formData.description && newFormData.append("description", formData.description)
      formData.files.forEach(file => newFormData.append('files', file))

      const response = await createCourse(newFormData);
      setOpen(false)
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          const { data, status } = error.response;
          if (status === 401 || status === 400 || status === 404) {
            console.log(error.response);
            if(data.errors) setErrors(data.errors)
            // setOpenDialog(true);
          }
        }
      }
    }
    setLoading(false)

  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <div className='min-w-[70%] md:w-screen'>
        <DialogContent onInteractOutside={(e) => e.preventDefault()} className='md:gradient-border w-[350px] rounded-xl px-8 md:w-full'>
        <form className='w-full h-full' onSubmit={onSubmitForm}>
          <DialogHeader>
            <DialogTitle className='pb-5'>Add A Course</DialogTitle>
            <DialogDescription className='flex flex-col gap-8'>
              <div className='w-full flex flex-col justify-center gap-5'>
                <div className='w-full text-left'>
                  <Input 
                    onChange={handleChange}
                    className={`w-full ${errors.title && 'border-red-400'}`}
                    value={formData.title}
                    id="title" 
                    type="text" 
                    placeholder="Course Name" 
                    name="title"  
                  />
                  {errors.title && <Label className='text-red-400'>{errors.title}</Label>}
                </div>
                <div className='w-full text-left'>
                  <Input 
                    onChange={handleChange} 
                    className={`w-full ${errors.description && 'border-red-400'}`} 
                    value={formData.description}
                    id="description" 
                    type="text"
                    name="description"
                    placeholder="Write a short description..." 
                  />
                  {errors.description && <Label className='text-red-400'>{errors.description}</Label>}
                </div> 
              </div>

              <div className='w-full text-left'>
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFile}
                  accept=".doc, .ppt, .pptx, .docx, .pdf"
                  name="files"
                />
                <div onClick={handleClick} className='flex flex-col justify-center items-center gap-2 p-6 rounded-xl bg-[#150F24] gradient-border cursor-pointer'>
                  <FilePlus />
                  <p className='font-bold'>Upload Document</p>
                  <p className='text-xs text-gray-400'>Click to select file</p>
                  {errors.files && <Label className='text-red-400 text-xs'>{errors.files}</Label>}
                </div>

              </div>
            <div>
            <div className='w-full max-h-[100px] overflow-y-scroll'>
              {formData.files.map((item, i) => {
                return (
                  <div className='h-[50px] flex justify-center items-center gap-2' key={i}>
                    <div className='p-1 h-[38px] w-[38px] flex justify-center items-center gap-2 rounded border border-solid border-gray-800'><File /></div>
                      <Input className='w-full'id="password1" type="text" placeholder="Title of Document" value={formData.files[i].name} />
                      <X onClick={() => removeFile(i)} className='text-[#FF7193] cursor-pointer'/>
                  </div>
                )

              })}
              <div style={{paddingTop: '60px'}} ref={filesEndRef} />
            </div>
            
          </div>
          <Button type="submit" disabled={loading} variant="light" className="w-full disabled">
              {loading? <ThreeDots color="#fff"  height="35" width="35" /> : "Add new course"}
          </Button>   
      </DialogDescription>
    </DialogHeader>
    </form>
  </DialogContent>
  </div>
</Dialog>
)}

export default AddCourseModal