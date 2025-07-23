"use client"
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState , useEffect ,useRef} from 'react';
import Image from 'next/image';
import {  Menu, X } from 'lucide-react';
import Link from 'next/link';
function MobileNav() {
  const [logged,setLogged] = useState(false);
  const menu = useRef(null)
  const menuOpenningButton = useRef(null)
  const menuClosingButton = useRef(null)

  //functions
  const menuOpeningHandler =  ()=>{
    gsap.to(menu.current ,{
      width:"85%",
      duration:.5,
      ease:"linear",
    })
  }
  const menuClosingHandler =  ()=>{
    gsap.to(menu.current ,{
      width:"0px",
      duration:.5,
      ease:"linear",
    })
  }
  return (
    <>
    <div className='w-full h-[60px] sm:hidden flex mt-5 justify-center items-center px-5 '>
      <div className='w-full h-full px-3 py-1 flex justify-between rounded-2xl  items-center bg-[#F7F7F7]'>
        <div>
        <Image src={"https://res.cloudinary.com/dd0ilxbb6/image/upload/v1752938826/fullLogo_uw8tfh.png"} alt='logo' width={180} height={120} className='object-center object-cover  '/>
      </div>
      <div>
        <Menu ref={menuOpenningButton} size={30} onClick={menuOpeningHandler} color='#906FFC' />
      </div>
      </div>
    </div>
    <div ref={menu} className='w-[0px]  overflow-hidden h-screen fixed top-0  py-5 flex flex-col z-10 backdrop-blur-2xl right-0'>
      <div className='w-[85vw] px-12 overflow-hidden flex justify-end'>
        <X onClick={menuClosingHandler} color='#906FFC' size={30} ref={menuClosingButton}/>
      </div>
      <div className='flex w-[85vw] flex-col px-12 overflow-hidden  gap-2 text-xl'>
        <Link href={"/"}>Dashboard</Link>
        <Link href={"/project"}>Projects</Link>
        <Link href={"/clients"}>Client</Link>
        <Link href={"/invoice"}>Invoice</Link>
        <Link href={"/setting"}>Profile Setting</Link>
        <div style={{display: `${logged?"none":"flex"}`}} className={`flex text-md text-white gap-2`}>
          <Link href={"/log-in"} className='bg-[#906FFC] px-3 py-1 text-lg font-medium rounded-lg '>Log In</Link>
          <Link href={"/sign-up"} className='bg-[#906FFC] px-3 py-1 text-lg font-medium rounded-lg'>Sign Up</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default MobileNav
