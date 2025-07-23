"use client"
import Link from 'next/link'
import React from 'react'
import { DM_Sans } from 'next/font/google';
import { ArrowUpRight } from 'lucide-react';


const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})
function Cards({backGround,url,Heading,textColor,dataNumber}) {
    return (
    <Link href={url} className={`h-[150px] hover:shadow-xl transition px-5 py-4 w-full flex flex-col justify-between rounded-2xl ${backGround?`bg-[${backGround}]`:"bg-white"} `}>
      <div className='flex justify-between items-center'>
        <h3 style={{color: `${textColor?`${textColor}`:"black"}`}} className={`text-xl font-medium ${dmSans.className} `}>{Heading}</h3>
        <div style={{background:`${backGround?"white":""}`}} className='border p-1 flex justify-center items-center rounded-full'>
            <ArrowUpRight color={"#000"} />
        </div>
      </div>
      <div>
        <h2 style={{color: `${textColor?`${textColor}`:"black"}`}} className={`text-5xl ${dmSans.className}`}>{dataNumber}</h2>
      </div>
    </Link >
  )
}

export default Cards
