import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import { Button } from '@/components/ui/button'
import { GroupMember } from './GroupMember';
export const DashboardHeader = () => {
  return (
    <div className='flex justify-end md:justify-between items-center w-full bg-blue-darkest border-b border-purple-light p-6 absolute top-0 left-0 z-10'>

            <div className='w-1/2 hidden md:block'>
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
