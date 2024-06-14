'use client'
import React, {useState} from 'react'
import { ChevronsRight, ChevronsDown } from 'lucide-react'
import { DashboardFlashcards } from './DashboardFlashcards'


const DashboardFlascardsList = () => {
    const [toggled, setToggled] = useState(false)
  return (
    <div className={`relative border-r border-purple-light pt-4 overflow-y-scroll ${toggled? 'w-[30px]' : 'w-[200px]'}`}>
            {toggled && 
                <p onClick={() => setToggled(!toggled)} className='absolute top-[60px] left-[-37px] flex flex-row text-[10px] w-[100px] gap-2 cursor-pointer hover:underline rotate-90'>
                    <ChevronsDown className='w-4 h-4' /> 
                    Flashcards 
                </p>
            }
            {!toggled &&
                <div className='flex flex-col gap-4 fixed mb-4 pb-4 pt-4 pl-3 border-b z-10 w-full bg-blue-darkest top-[93px]'>
                    <p onClick={() => setToggled(!toggled)} className='text-[10px] flex flex-row items-center gap-2 cursor-pointer hover:underline'>
                        <ChevronsRight className='w-4 h-4' /> 
                        Flashcards 
                    </p>
                </div>
            }
            
            {!toggled &&
                <div className='flex flex-col gap-[6px] border-purple-light pt-14 px-3'>
                    <DashboardFlashcards gradient={true}/>
                    <DashboardFlashcards />
                    <DashboardFlashcards />
                    <DashboardFlashcards />
                </div>
            }
    </div>
  )
}

export default DashboardFlascardsList