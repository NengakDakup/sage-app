import React from 'react'
import React from 'react'
import AuthButtons from '@/components/AuthButtons'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label" 
import { X } from 'lucide-react';
const Login = () => {
  return (
    <div className="flex flex-col items-center h-full p-4 md:p-12">
        <div className=" relative flex flex-col w-full h-min max-w-[743px] rounded-xl gap-12 py-12 px-4 md:px-16 my-auto md:gradient-border-darkest">
        <Link href='#' className='hidden md:block'>
          <X className='absolute right-[90px] hidden md:block'/> 
        </Link>
          <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
            <Image src='/images/logo.png' alt='SageAI' width={36} height={36} />
            <h1 className='font-bold text-xl md:text-3xl'>Welcome Back</h1>
          </div>
          
          <AuthButtons/>

          <div className="flex items-center w-full">
            <hr className="flex-1 border-t border-gray-600" />
            <p className="mx-4 text-xs italic text-gray-600">OR</p>
            <hr className="flex-1 border-t border-gray-600" />
          </div>

          <form>
            <div className="flex flex-col mb-4 gap-2">
              <Label className="text-gray-600" htmlFor="email">Email</Label>
              <Input id="email" type="text" placeholder="Enter Registered Email" />
            </div>
            <div className="flex flex-col mb-4 gap-2">
              <Label className="text-gray-600" htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter Password" />
            </div>
            <Button variant="light" className="w-full">Log In</Button>
          </form>

          <div className='flex items-center gap-6'>
            <h2>Don't have an account yet?</h2>

            <Link href='/auth/signup' className='inline'>
              <Button variant="dark">Sign Up</Button>
            </Link>
          </div>    
        </div>
      </div>
  )
}

export default Login