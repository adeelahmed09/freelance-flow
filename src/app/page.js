"use client"
import Head from "next/head"
import Nav from "./components/Nav"
import UpperTextOfPages from "./components/UpperTextOfPages"
import FirstGrid from "./components/dashboard/FirstGrid"
import { useSelector } from 'react-redux'

import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
function Page() {
  const logged = useSelector((state) => state.user.logged)
  if (logged) {
    return (
      <>
        <Head>
          <title>DashBoard | Freelance Flow</title>
          <meta name="description" content="View and manage all your freelance clients, projects and invoices easily in one place with Freelance Flow." />
          <meta name="keywords" content="freelancer, client management, freelance dashboard, Freelance Flow" />
        </Head>
        <div className="lg:ml-[20vw] sm:ml-[25vw] px-5 py-2 lg:w-[80vw] sm:w-[75vw] h-screen">
          <Nav />
          <div className="w-full p-5 min-h-screen mt-4  rounded-2xl shadow-xl bg-[#F7F7F7]">
            <UpperTextOfPages PageName={"DashBoard"} PageButtonText={"Add Project"} PageLink={"/add-project"} />
            <FirstGrid />
          </div>

        </div>
      </>
    )
  }
  else {
    return (
      <>
        <Head>
          <title>DashBoard | Freelance Flow</title>
          <meta name="description" content="View and manage all your freelance clients, projects and invoices easily in one place with Freelance Flow." />
          <meta name="keywords" content="freelancer, client management, freelance dashboard, Freelance Flow" />
        </Head>
        <div className="lg:ml-[20vw] sm:ml-[25vw] px-5 py-2 lg:w-[80vw] sm:w-[75vw] h-screen">
          <Nav />
          <div className="w-full min-h-[77%] mt-4 flex justify-center items-center rounded-2xl shadow-xl bg-[#F7F7F7]">
            <h1 className={`text-2xl font-semibold ${urbanist.className}`}>
              Please Sign Up / Login First
            </h1>
          </div>

        </div>
      </>
    )
  }
}

export default Page
