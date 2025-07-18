"use client"
import React from 'react'
import Cards from './Cards.js'

function FirstGrid() {
  return (
    <div className='w-full mt-5 gap-2 grid lg:grid-cols-4 sm:grid-cols-2 '>
      <Cards backGround={"#906FFC"} textColor={'#fff'} Heading={"Total Projects"} dataNumber={24} url={"/project"}/>
      <Cards url={"/project"} Heading={"Ended Projects"} dataNumber={10}/>
      <Cards url={"/project"} Heading={"Runing Projects"} dataNumber={12}/>
      <Cards url={"/project"} Heading={"Pending Projects"} dataNumber={2}/>
    </div>
  )
}

export default FirstGrid
