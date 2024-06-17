'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { isAxiosError } from "axios";
import AuthButtons from '@/components/AuthButtons'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from 'lucide-react';
import { loginUser } from '@/api/auth'
import { validateLoginInput } from '@/common/validation';
import { ThreeDots } from 'react-loader-spinner';

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const onSubmitForm = async (e) => {
    e.preventDefault()
    setErrors({})

    const {errors, isValid} = validateLoginInput(formData)

    if(!isValid) return setErrors(errors) 
    setLoading(true)
    try {
      const response = await loginUser(formData);
      const token = response.data.token;
      const user = response.data.user;

      localStorage.setItem("access_token", token);
      // localStorage.setItem("user_id", user.id);

      
      // dispatch(setUserDetails(userData.data));
      return router.push('/dashboard');
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          const { data, status } = error.response;
          console.log(data, status);
          if (status === 401 || status === 400 || status === 404) {
            
            if(data.errors) setErrors(data.errors)
            // setOpenDialog(true);
          }
        }
      }
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center h-full p-4 md:p-12">
      <div className=" relative flex flex-col w-full h-min max-w-[743px] rounded-xl gap-12 py-12 px-4 md:px-16 my-auto md:gradient-border-darkest">
        <Link href='#' className='hidden md:block'>
          <X className='text-[#FF7193] absolute right-[40px] hidden md:block'/> 
        </Link>
          <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
            <Image src='/images/logo.png' alt='SageAI' width={36} height={36} />
            <h1 className='font-bold text-xl md:text-3xl'>Welcome Back</h1>
          </div>
          
          <AuthButtons />
          <div className="flex items-center w-full">
            <hr className="flex-1 border-t border-gray-600" />
            <p className="mx-4 text-xs italic text-gray-600">OR</p>
            <hr className="flex-1 border-t border-gray-600" />
          </div>

          <form onSubmit={onSubmitForm}>
            <div className="flex flex-col mb-4 gap-2">
              <Label className="text-gray-600" htmlFor="email">Email</Label>
              <Input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange} 
                id="email"  
                placeholder="Enter Registered Email" 
                className={`${errors.email && 'border-red-400'}`}
              />
              {errors.email && <Label className='text-red-400'>{errors.email}</Label>}
            </div>
            <div className="flex flex-col mb-4 gap-2">
              <Label className="text-gray-600" htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange} 
                id="password" 
                placeholder="Enter Password" 
                className={`${errors.password && 'border-red-400'}`}
              />
              {errors.password && <Label className='text-red-400'>{errors.password}</Label>}
            </div>
            <Button disabled={loading} variant="light" className="w-full disabled">
              {loading? <ThreeDots color="#fff"  height="35" width="35" /> : "Log In"}
            </Button>
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