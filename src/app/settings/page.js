"use client"

import Head from "next/head"
import Nav from "../components/Nav"
import { Urbanist } from 'next/font/google';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InputText from "../components/sign-up/InputText";
import Button from "../components/Button";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import axios from "axios";

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
function Page() {
  const [loading, setLoading] = useState(false)
  const logged = useSelector((state) => state.user.logged)
  const user = useSelector((state) => state.user)
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    name: "",
  })
  // useEffect(() => {
  //   setFormValue({
  //     username: user.username,
  //     email: user.email,
  //     name: user.name
  //   })
  // }, [user])
  const onChangeInputTextHandler = (e) => {
    const { value, name } = e.target
    setFormValue({ ...formValue, [name]: value })
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (formValue.email !== user.email || formValue.username !== user.username || formValue.name !== user.name) {
      if (!formValue.email && !formValue.username && !formValue.name) {
        toast.error('All fields are Empty', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false)
        return
      }
      axios.post("/api/user-update", {
        username: formValue.username,
        email: formValue.email,
        name: formValue.name,
        id:user._id
      })
        .then(
          (res) => {
            toast.success('Successfully Signed Up', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setLoading(false)
            return
          }
        )
        .catch(
          (err) => {
            setLoading(false)
            toast.error(err?.response?.data?.message || "Something went wrong", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            return
          }
        )
    }
    else {
      toast.error('All fields are same', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false)
      return
    }
  }
  const onClickCancel = (e) => {
    e.preventDefault()
    setFormValue({
      username: "",
      email: "",
      name: "",
    })
  }
  if (!logged) {
    return (
      <>
        <Head>
          <title>Settings | Freelance Flow</title>
          <meta name="description" content="View and manage all your freelance clients, projects and invoices easily in one place with Freelance Flow." />
          <meta name="keywords" content="freelancer, client management, freelance dashboard, Freelance Flow" />
        </Head>
        <div className="lg:ml-[20vw] sm:ml-[25vw] px-5 py-2 lg:w-[80vw] sm:w-[75vw] h-screen">
          <Nav />
          <div className="w-full h-[77%] mt-4 rounded-2xl shadow-xl flex justify-center items-center bg-[#F7F7F7]">
            <h1 className={`text-3xl font-semibold`}>Please Sign Up / Log In first</h1>

          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <Head>
          <title>Settings | Freelance Flow</title>
          <meta name="description" content="View and manage all your freelance clients, projects and invoices easily in one place with Freelance Flow." />
          <meta name="keywords" content="freelancer, client management, freelance dashboard, Freelance Flow" />
        </Head>
        <div className="lg:ml-[20vw] sm:ml-[25vw] px-5 py-2 lg:w-[80vw] sm:w-[75vw] h-screen">
          <Nav />
          <div className="w-full relative h-[77%] mt-4 overflow-hidden rounded-2xl shadow-xl bg-[#F7F7F7]">
            <Loader loading={loading} />
            <div className="p-5">
              <h1 className={`lg:text-4xl sm:text-3xl text-2xl text-black font-[600] tracking-tight ${urbanist.className}`}>Profile Setting</h1>
              <form onSubmit={onSubmitHandler} className="flex flex-col  gap-2">
                <InputText notRequired={true} placeholder={user.username} className={"mt-1"} name={"username"} text={"Username:"} type={"text"} value={formValue.username} onChange={onChangeInputTextHandler} />
                <InputText notRequired={true} placeholder={user.name} className={"mt-1"} name={"name"} text={"Name:"} type={"text"} value={formValue.name} onChange={onChangeInputTextHandler} />
                <InputText notRequired={true} placeholder={user.email} className={"mt-1"} name={"email"} text={"Email:"} type={"text"} value={formValue.email} onChange={onChangeInputTextHandler} />
                <div className="flex mt-1 w-full items-center justify-start gap-2">
                  <Button type={"submit"} text={"Change"}></Button>
                  <Button type={""} onClick={onClickCancel} classname={`bg-red-600 transition hover:bg-black`} text={"Cancel"}></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Page
