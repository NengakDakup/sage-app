import React from 'react'
import { Copy } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


export const DashboardFlashcards = ({gradient}) => {
  return (
        <div className={`${gradient? "bg-gradient-to-b from-[#A109FF] to-[#4912FF]":"bg-[#252031]"} flex flex-col  p-4 rounded-lg relative`}>
            <div className=''>
                <FontAwesomeIcon icon={faBookmark} className='rotate-[-90deg] absolute left-0  top-1 text-[#743999] text-3xl'/> 
                <p className='text-[10px] font-bold absolute left-0 top-3'>#23</p>
            </div> 
            <h1 className='font-bold text-xs pt-3'>Kirchoff's Law</h1>
            <p className='text-[10px] pt-2 pb-3'>Kirchhoff's current law states that the sum
                 of all currents entering and leaving a node
                  in an electrical circuit is zero
            </p>
            
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-1'>
                    <Copy className='w-[14px] h-[14px]'/>
                    <p className='text-[10px]'>Copy</p>
                </div>

                <div className='flex justify-center items-center gap-1 mr-2'>
                    <ArrowDownToLine  className='w-[14px] h-[14px]'/>
                    <p className='text-[10px]'>Save</p>
                </div>
            </div>
        </div>
  )
}
