"use client"
import React, { useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Loader({loading}) {
  gsap.registerPlugin(useGSAP());
  const loader = useRef(null);
  useGSAP(()=>{
    gsap.to(loader.current,{
      rotate:360,
      duration:.5,
      ease:"linear",
      repeat:-1,
    })
  })
  
  return (
    <div style={{display: `${loading?"flex":"none"}`}} className='w-full h-full flex  backdrop-blur-sm  bg-transparent bg-  absolute items-center justify-center'>
      <div ref={loader} className='w-16 h-16 rounded-full border-8 bg-transparent border-gray-400 border-t-blue-600'>

      </div>
    </div>
  )
}

export default Loader
