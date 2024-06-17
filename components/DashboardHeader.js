'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { ArrowDown, Book, Bookmark, ListMinus, Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import { Button } from '@/components/ui/button'
import { GroupMember } from './GroupMember';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation'

const MobileHeader = ({setMobileLeftToggled,setMobileRightToggled}) => {
    return (
        <div className='z-100 md:hidden flex flex-row w-full items-center justify-between h-[81px] absolute top-0 left-0 px-4 border-b border-purple-light'>
            <ListMinus className='cursor-pointer' onClick={() => setMobileLeftToggled(true)} />
            <div className='border border-purple-light flex flex-row gap-2 px-2 items-center rounded-xl py-2 text-xs'>
                <Book />
                Intro to AI
                <ChevronDown className='text-slate-500 w-4 h-4' />
            </div>
            <Bookmark onClick={() => setMobileRightToggled(true)} />


        </div>
    )
}

const DesktopHeader = () => {
  return (
    <div className='hidden md:flex justify-end md:justify-between items-center w-full bg-blue-darkest border-b border-purple-light p-6 absolute top-0 left-0 z-10'>
            <div className='w-1/2 md:inline'>
                <Input id="seach" className="pl-12 rounded-full border-purple-light bg-blue-darkest" type="search" placeholder="Search conversation..." />

                <div className='relative bottom-8 pl-4 flex items-center'>
                    <Search className='absolute top-[0px]'/>
                </div>

            </div>

            <div className='w-1/2 flex justify-end items-center gap-4'>
                <div>
                    <GroupMember/>
                </div>

                <div className='flex justify-between items-center gap-3'>  
                    <Button variant="dark" className='flex justify-st items-center rounded-full relative'>
                        <div className='w-[36px] h-[36px] border rounded-full'>
                            <Image src='/images/placeholder-image.png' alt='Image' width={42} height={42} className='w-full rounded-full'/> 
                        </div>

                        
                            <ChevronDown />
                        
                    </Button>
                   
                    <Link href='#'>
                        <Button variant="dark" className='flex justify-between items-center gap-2'>
                            <UsersRound />
                            <p>Start group session</p>
                        </Button>
                    </Link>
                </div>

                <EllipsisVertical />
            </div>

    </div>
  )
}

export const DashboardHeader = ({setMobileLeftToggled,setMobileRightToggled}) => {
    const { user } = useUser()
    const router = useRouter()
    useEffect(() => {
        if(!user) return router.push("/auth/login");
    }, [user])
    return(
        <>
            <MobileHeader setMobileLeftToggled={setMobileLeftToggled} setMobileRightToggled={setMobileRightToggled} />
            <DesktopHeader />
        </>
    )
}
