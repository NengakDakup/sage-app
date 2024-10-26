'use client'
import React, {useState, useEffect} from 'react'
import uniqid from 'uniqid';
import { ChevronsRight, ChevronsDown, SquarePlus } from 'lucide-react'
import { Button } from './ui/button'
import { Skeleton } from "@/components/ui/skeleton"
import ChatHistoryItem from './ChatHistoryItem'
import useWindowDimensions from '@/context/useWindowDimensions'
import { useCourses } from '@/context/CoursesContext'
import { useToast } from "@/components/ui/use-toast"



const DashboardChatHistory = () => {
    const {chats, activeCourse, setChats, setActiveChat, courses } = useCourses()
    const [toggled, setToggled] = useState(false)
    const {width} = useWindowDimensions();
    const { toast } = useToast()

    useEffect(() => {
        if(width < 1200) setToggled(true)
    }, [width])

    const newChat = () => {
        if(!activeCourse){
            toast({
                title: "Heads Up",
                description: "You can't do that just yet, please select a course or create one",
            });
            return
        }  
        const newChat = {title: "New Chat", course: activeCourse, messages: [], updatedAt: (new Date().toISOString()), type: 'new', _id: uniqid()}
        setChats((prevState) => [newChat,...prevState ])
        setActiveChat(newChat)
    }


    return (
        <div className={`hidden md:block relative border-r border-purple-light pt-4 ${toggled? 'w-[30px]' : 'w-[200px] '}`}>
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
                    <Button onClick={newChat} className={`w-full py-4 gap-4 justify-start`} variant="dark-dashed">
                        <SquarePlus />
                        New Chat
                    </Button>
                </div>
            }
            
            {(!toggled && (chats.length > 0)) && 
                <div className='flex flex-col gap-3 mt-4 pt-4 px-4 border-t border-purple-light overflow-y-scroll h-full'>
                    {chats.map(chat => <ChatHistoryItem chat={chat} />)}               
                </div>
            }
            {(!toggled && courses.loading) && 
                <div className='flex flex-col gap-3 mt-4 pt-4 px-4 border-t border-purple-light overflow-y-scroll h-full'>
                    <Skeleton className="w-full h-8 px-2" />
                    <Skeleton className="w-full h-8 px-2" />
                    <Skeleton className="w-full h-8 px-2" />
                    <Skeleton className="w-full h-8 px-2" />
                </div>
            }

            {(!toggled && chats.length < 1 ) && <p className='pt-8 text-sm w-full text-center text-slate-300'>You have no chats yet</p>}     
        </div>
    )
}
export default DashboardChatHistory