"use client"
import Link from "next/link";
import { useState } from "react"
import { DM_Sans } from 'next/font/google';
import { User } from "lucide-react";
import { useSelector } from "react-redux";


const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})
function NavLeft() {
  const loggedIn = useSelector((state) => state.user.logged)


  if (!loggedIn) {
    return (
      <div className={`flex justify-center items-center gap-2 ${dmSans.className}`}>
        <Link className="bg-[#8F6EFB] hover:bg-[#3A265B] hover:shadow-lg transition lg:text-lg rounded-2xl sm:text-md text-white px-3 py-2" href="/sign-up">Sign Up</Link>
        <Link className="bg-[#8F6EFB] hover:bg-[#3A265B] hover:shadow-lg transition lg:text-lg rounded-2xl sm:text-md text-white px-3 py-2" href="/log-in">Log In</Link>
      </div>
    )
  }
  else {
    return (
      <div className={`flex justify-center items-center gap-2 ${dmSans.className}`}>
        <Link className="bg-[#8F6EFB] hover:bg-[#3A265B] hover:shadow-lg transition lg:text-lg rounded-2xl sm:text-md text-white px-3 py-2" href="/settings"><User color="#fff" size={28} /></Link>
      </div>
    )
  }
}

export default NavLeft
