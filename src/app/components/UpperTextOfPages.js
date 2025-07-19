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
    <div className="w-full sm:items-center items-start gap-2 sm:flex-row flex-col justify-between flex">
      <div className="sm:w-[70%] w-full ">
        <h1 className={`${urbanist.className} lg:text-4xl sm:text-3xl text-2xl text-black font-[600]`}>{PageName}</h1>
        <p className={`text-[#696969] lg:text-md sm:text-sm text-sm font-[500] tracking-wide  ${urbanist.className}`}>View and manage all your freelance clients, projects and invoices easily</p>
      </div>
      <div>
        <Link className="flex items-center lg:text-[16px] sm:text-[14px] text-md py-2 font-semibold px-3 rounded-3xl text-white bg-[#906FFC] " href={PageLink}> <Plus color="#fff" size={18} /> {PageButtonText}</Link>
      </div>
    </div>
  )
}

export default UpperTextOfPages
