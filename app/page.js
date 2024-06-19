'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Lottie from 'react-lottie';
import animationData from './../lib/lottie/upload.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYTop slice"
  }
};


export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="px-8">
        <div className="flex flex-col md:flex-row py-16">
          <div className="w-full md:w-1/2">
            <p className="font-bold text-4xl md:text-6xl md:mt-16 leading-[40px] md:leading-[70px]">SUPERCHARGE YOUR STUDY HABITS</p>
            <p className="mt-6 text-slate-300">Experience smarter way to learn efficiently tailored to fit every study style.</p>
            <Button className="mt-8" variant="light">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-center md:items-end">
            
            <Lottie 
              options={defaultOptions}
                height={600}
                width={600}
              />

          </div>

        </div>
      </div>
    </div>  
    );
}
