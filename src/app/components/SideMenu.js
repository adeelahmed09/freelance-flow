"use client"
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Presentation,UserRound,Settings,ReceiptText } from 'lucide-react';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';
import { useSelector, useDispatch } from 'react-redux'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { removeUser,addUser } from '@/store/UserSlice';
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})


function SideMenu() {
  const dispatch = useDispatch()
  const pathname = usePathname()
  const { data: session, status } = useSession();
  const user = useSelector((state)=>state.user)
  
  useEffect(()=>{
     if (status === "authenticated"){
      dispatch(addUser({
        username :  session.user.username,
        name: session.user.name,
        email:session.user.email,
        _id: session.user._id
      }
      ))
     }
     else{
      dispatch(removeUser())
     }
  },[status])
  return (
    <div className="lg:w-[20vw] px-1 sm:w-[25vw] shadow-lg bg-[#F7F7F7] h-[99vh] my-2 mx-1 fixed sm:flex flex-col hidden rounded-2xl left-0">
      <div className="logo">
        <img src="/fullLogo.png" className="h-[130px] w-full object-cover object-center" alt="" />
      </div>
      <div className="Menu pl-3">
        <h3 className={`${dmSans.className} text-[#392558] text-sm`}>
          Menue
        </h3>
        <ul className={`flex flex-col text-lg select-none text-[#696969] font-normal pt-3 gap-2 pl-2 ${dmSans.className}`}>
          <li className={`${pathname==="/"?"side-active visible":""}  relative`}>
            <Link
              href={"/"}
              className={`flex justify-start gap-2 ${pathname === "/" ? "text-[#000000]" : "text-[#696969]"} items-center`} >
                <span>
                <LayoutDashboard
                  size={24}
                  color={pathname === "/" ? "#8F6EFB" : "#696969"}
                  strokeWidth={2} />
                </span>Dashboard
              </Link>
          </li>
          <li className={`${pathname==="/project"?"side-active visible":""}  relative`} ><Link href={"/project"} className={`flex justify-start gap-2 ${pathname === "/project" ? "text-[#000000]" : "text-[#696969]"} items-center`} ><span><Presentation size={24} color={pathname === "/project" ? "#8F6EFB" : "#696969"} strokeWidth={2} /></span>Projects</Link></li>
          <li 
          className={`${pathname==="/clients"?"side-active visible":""}  relative`}
          >
            <Link
              href={"/clients"}
              className={`flex justify-start gap-1 ${pathname === "/clients" ? "text-[#000000]" : "text-[#696969]"} items-center`} >
                <span>
                <UserRound
                  size={24}
                  color={pathname === "/clients" ? "#8F6EFB" : "#696969"}
                  strokeWidth={2} />
                </span>Clients
              </Link>
          </li>
          <li
          className={`${pathname==="/invoice"?"side-active visible":""}  relative`}
          >
            <Link
              href={"/invoice"}
              className={`flex justify-start gap-1 ${pathname === "/invoice" ? "text-[#000000]" : "text-[#696969]"} items-center`} >
                <span>
                <ReceiptText
                  size={24}
                  color={pathname === "/invoice" ? "#8F6EFB" : "#696969"}
                  strokeWidth={2} />
                </span>Invoice
              </Link>
          </li>
          <li
          className={`${pathname==="/settings"?"side-active visible":""}  relative`}
          >
            <Link
              href={"/settings"}
              className={`flex justify-start gap-1 ${pathname === "/settings" ? "text-[#000000]" : "text-[#696969]"} items-center`} >
                <span>
                <Settings
                  size={24}
                  color={pathname === "/settings" ? "#8F6EFB" : "#696969"}
                  strokeWidth={2} />
                </span>Profile Settings
              </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
