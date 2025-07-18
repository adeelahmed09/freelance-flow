"use client"

import Link from "next/link"
import { Plus } from "lucide-react";
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600','700'],
  display: 'swap',
})
function UpperTextOfPages({PageName,PageLink,PageButtonText}) {
  return (
    <div className="w-full items-center justify-between flex">
      <div className="w-[70%]">
        <h1 className={`${urbanist.className} lg:text-4xl sm:text-3xl text-black font-[600]`}>{PageName}</h1>
        <p className={`text-[#696969] lg:text-md sm:text-sm font-[500] tracking-wide  ${urbanist.className}`}>View and manage all your freelance clients, projects and invoices easily</p>
      </div>
      <div>
        <Link className="flex items-center lg:text-[16px] sm:text-[14px] py-2 font-semibold px-3 rounded-3xl text-white bg-[#906FFC] " href={PageLink}> <Plus color="#fff" size={21} /> {PageButtonText}</Link>
      </div>
    </div>
  )
}

export default UpperTextOfPages
