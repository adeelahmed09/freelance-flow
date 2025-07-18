"use client"

import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600','700'],
  display: 'swap',
})
function InputText({name,text,value,onChange,type ,className,placeholder}) {
  return (
    <div className={`${urbanist} flex flex-col ${className}`}>
        <label htmlFor={name} className={`${urbanist.className} text-xl`}>{text}</label>
        <input type={type} placeholder={placeholder} className='w-[250px] px-2.5 py-1 rounded outline-none border-[1.5px] border-[#39255A]' required value={value} onChange={onChange} name={name} id={name} />
    </div>
  )
}

export default InputText
