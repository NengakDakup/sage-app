'use client'
import Lottie from 'react-lottie';
import animationData from './../../lib/lottie/group.json';
import React from 'react';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function AuthLayout({ children }) {
    
  
    return (
        <div className="flex w-screen h-screen">
            <div className="hidden lg:flex relative w-1/2">
            <Lottie 
              options={defaultOptions}
                height={800}
                width={800}
              />
            </div>
            <div className="w-full lg:w-1/2 h-screen overflow-x-auto">
                {children}
            </div>
            
        </div>
    );
  }