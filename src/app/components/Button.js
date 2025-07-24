"use client"
import React from 'react'

function Button({classname,text,type, onClick}) {
  return (
    <button type={type} onClick={onClick} className={`px-3 py-1.5 text-lg font-semibold text-white bg-[#8F6EFB] hover:bg-[#3A265B] transition rounded-xl ${classname}`}>
        {text}
    </button>
  )
}

export default Button
