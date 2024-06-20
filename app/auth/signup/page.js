'use client'
import React, {useState} from 'react'
import AuthButtons from '@/components/AuthButtons'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from 'lucide-react';
import { createUser } from '@/api/auth'
import { validateSignupInput } from '@/common/validation';
import { ThreeDots } from 'react-loader-spinner';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation'
import { isAxiosError } from 'axios'

const SignUp = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const { setLoggedUser } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirm_password: ''
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

    const {errors, isValid} = validateSignupInput(formData)

    if(!isValid) return setErrors(errors) 
    setLoading(true)
    try {
      const response = await createUser(formData);
      const token = response.data.token;
      const user = response.data.user;

      localStorage.setItem("access_token", token);
      setLoggedUser(user)
      
      return router.push('/dashboard');
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          const { data, status } = error.response;
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
    <div className="flex flex-col items-center h-full p-4 md:p-12 ">
    <div className="relative flex flex-col w-full h-min max-w-[743px] rounded-xl gap-12 py-12 px-4 md:px-16 my-auto md:gradient-border-darkest">
    <Link href='/app/page.js' className=' hidden md:block'>
      <X className=' text-[#FF7193] absolute right-[40px] hidden md:block'/> 
    </Link>
        <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
            <Image src='/images/logo.png' alt='SageAI' width={36} height={36} />
            <h1 className='font-bold text-xl md:text-3xl'>Get Started</h1>
        </div>
{/* 
        

        <div className="flex items-center w-full">
                <hr className="flex-1 border-t border-gray-600" />
                <p className="mx-4 text-xs italic text-gray-600">OR</p>
                <hr className="flex-1 border-t border-gray-600" />
            </div> */}

            <form onSubmit={onSubmitForm}>
                <div className="flex flex-col mb-4 gap-2">
                    <Label className="text-gray-600" htmlFor="email">Email</Label>
                    <Input
                     type="email" 
                     name="email" 
                     id="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="Enter Email"
                     className={`${errors.email && 'border-red-400'}`}
                     />
                    {errors.email && <Label className='text-red-400'>{errors.email}</Label>}

                </div>
                <div className="flex flex-col mb-4 gap-2">
                    <Label className="text-gray-600" htmlFor="username">Username</Label>
                    <Input  
                    type="username"
                    name="username" 
                    value={formData.username}
                    onChange={handleChange} 
                    id="username"
                    placeholder="Enter Username" 
                    />
                    {errors.username && <Label className='text-red-400'>{errors.username}</Label>}
                </div>
                <div className="flex flex-col mb-4 gap-2">
                    <Label className="text-gray-600" htmlFor="password1">Create Password</Label>
                    <Input 
                    type="password"
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password" 
                    id="password1" 
                    />
                    {errors.password && <Label className='text-red-400'>{errors.password}</Label>}
                </div>
                <div className="flex flex-col mb-4 gap-2">
                    <Label className="text-gray-600" htmlFor="password2">Confirm Password</Label>
                    <Input 
                    type="password" 
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    id="password2"
                    />
                    {errors.confirm_password && <Label className='text-red-400'>{errors.confirm_password}</Label>}
                </div>
                <Button type="submit" disabled={loading} variant="light" className="w-full disabled">
                    {loading? <ThreeDots color="#fff"  height="35" width="35" /> : "Create Account"}
                </Button>
            </form>

            <div className='flex items-center gap-6'>
                <h2>Already have an account?</h2>

                <Link href='/auth/login' className='inline'>
                    <Button variant="dark">Log In</Button>
                </Link>   
            </div>    
        </div>
      </div>
  )
}

export default SignUp