'use client'
import React, {useState} from 'react'
import { ChevronsRight, ChevronsDown, SquarePlus } from 'lucide-react'
import { Button } from './ui/button'
import ChatHistoryItem from './ChatHistoryItem'


const DashboardChatHistory = () => {
    const [toggled, setToggled] = useState(false)
    return (
        <div className={`relative border-r border-purple-light pt-4 ${toggled? 'w-[30px]' : 'w-[200px] '}`}>
            {toggled && 
                <p onClick={() => setToggled(!toggled)} className='absolute top-[60px] left-[-37px] flex flex-row text-[10px] w-[100px] gap-2 cursor-pointer hover:underline rotate-90'>
                    <ChevronsDown className='w-4 h-4' /> 
                    Chat History 
                </p>
            }
            {!toggled &&
                <div className='flex flex-col gap-4 px-4'>
                    <p onClick={() => setToggled(!toggled)} className='text-[10px] flex flex-row items-center gap-2 cursor-pointer hover:underline'>
                        <ChevronsRight className='w-4 h-4' /> 
                        Chat History 
                    </p>
                    <Button className={`w-full py-4 gap-4 justify-start`} variant="dark-dashed">
                        <SquarePlus />
                        New Chat
                    </Button>
                </div>
            }
            
            {!toggled &&
                <div className='flex flex-col gap-3 mt-4 pt-4 px-4 border-t border-purple-light overflow-y-scroll h-full'>
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />
                    <ChatHistoryItem />

                </div>
            }
            
        </div>
    )
}

export default DashboardChatHistory