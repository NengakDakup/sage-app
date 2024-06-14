import React from 'react'
import AuthButtons from '@/components/AuthButtons'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from 'lucide-react';

const page = () => {
  return (
    <div className="flex flex-col items-center h-full p-4 md:p-12 ">
    <div className="relative flex flex-col w-full h-min max-w-[743px] rounded-xl gap-12 py-12 px-4 md:px-16 my-auto md:gradient-border-darkest">
    <Link href='#' className=' hidden md:block'>
      <X className='absolute right-[0px] hidden md:block'/> 
    </Link>
        <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
            <Image src='/images/logo.png' alt='SageAI' width={36} height={36} />
            <h1 className='font-bold text-xl md:text-3xl'>Get Started</h1>
        </div>
  )
}

export default page