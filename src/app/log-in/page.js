"use client"

import Head from "next/head";
import Nav from "../components/Nav";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Urbanist } from 'next/font/google';
import InputText from "../components/sign-up/InputText";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})
function Page() {
    const [loading, setLoading] = useState(false);
    const [formValue, setformValue] = useState({
        username: "",
        password: "",
    });
    const router = useRouter();
    const onChangeInputTextHandler = (e) => {
        const { value, name } = e.target
        setformValue({ ...formValue, [name]: value })
    }
    const onCancelHandler = (e) => {
        e.preventDefault()
        setformValue({
            username: "",
            email: "",
            password: "",
            confirmPossword: "",
            image: "",
            name: "",
        })
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(formValue);
        const password = formValue.password.split("")
        if (password.length < 8) {
            setLoading(false)
            toast.error('Password must be 8 character', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setformValue({
                username: "",
                password: "",
            })
            return
        }
        setLoading(false)
    }
    return (
        <>
            <Head>
                <title>Login | Freelance Flow</title>
                <meta name="description" content="View and manage all your freelance clients, projects and invoices easily in one place with Freelance Flow." />
                <meta name="keywords" content="freelancer, client management, freelance dashboard, Freelance Flow" />
            </Head>
            <div className="lg:ml-[20vw] sm:ml-[25vw] px-5 py-2 lg:w-[80vw] sm:w-[75vw] h-screen">
                <Nav />
                <div className="w-full lg:h-[77%] p-5  relative flex flex-col items-center justify-center sm:h-[81%] mt-4 rounded-2xl shadow-xl bg-[#F7F7F7]">
                    <Loader loading={loading} />
                    <h1 className={`${urbanist.className} text-4xl font-semibold`}>Log In</h1>
                    <form action="" onSubmit={onSubmitHandler} className="mt-2 flex flex-col ">
                        <InputText placeholder={"Enter User Name or Email"} className={"mt-1"} name={"username"} text={"User Name / Email"} type={"text"} value={formValue.username} onChange={onChangeInputTextHandler} />
                        <InputText placeholder={"Enter Password"} className={"mt-1"} name={"password"} text={"Password"} type={"text"} value={formValue.password} onChange={onChangeInputTextHandler} />
                        <div className="flex justify-center gap-2 items-center mt-2">
                            <button type="submit" className="px-3 py-1 bg-[#8F6EFB] text-white text-lg rounded-lg font-semibold">Log In</button>
                            <button onClick={onCancelHandler} className="px-3 py-1 bg-red-500 text-white text-lg rounded-lg font-semibold">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Page
