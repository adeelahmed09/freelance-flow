"use client"
import Head from "next/head"
import Nav from "../components/Nav"

function Page() {
  return (
    <>
    <Head>
      <title>Project | Freelance Flow</title>
      <meta name="description" content="View and manage all your freelance clients, projects and invoices easily in one place with Freelance Flow." />
      <meta name="keywords" content="freelancer, client management, freelance dashboard, Freelance Flow" />
    </Head>
    <div className="lg:ml-[20vw] sm:ml-[25vw] px-5 py-2 lg:w-[80vw] sm:w-[75vw] h-screen">
      <Nav/>
      <div className="w-full h-screen mt-4 rounded-2xl shadow-xl bg-[#F7F7F7]">
        
      </div>
    </div>
    </>
  )
}

export default Page
