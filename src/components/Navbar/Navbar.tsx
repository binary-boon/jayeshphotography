"use client"

import Image from "next/image"
import logo from "../../../public/jayesh-photography-logo.png"
import Link from "next/link"
import { TfiAlignJustify , TfiClose } from "react-icons/tfi";

import { useState } from "react";




export default function Navbar(){

  const [menuOpen , setMenuOpen] = useState(false)

  const HandleNav =()=> {
    setMenuOpen(!menuOpen)
  }
  


  
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white z-20">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 ">
        <Link href="/">
        <Image src={logo} height={68} width={422} alt="Jayesh Khaturia Photography" className="cursor-pointer" priority /> 
        </Link>
      
      <div>
        
        <ul className="hidden sm:flex ">
          <Link href="/">
          <li className="ml-10 uppercase hover:border-b text-xl">Home</li></Link>


            <Link href="/about">
          <li  className="ml-10 uppercase hover:border-b text-xl">About</li>

          </Link>

          

          <Link href="/films">
          <li className="ml-10 uppercase hover:border-b text-xl">Wedding Films</li>

          </Link>


          <Link href="/photos">
          <li className="ml-10 uppercase hover:border-b text-xl">Wedding Photography</li>

          </Link>

         
          <Link href="/contact">
          <li className="ml-10 uppercase hover:border-b text-xl">Contact</li>

          </Link>
          


        </ul>
        
        </div> 

        <div onClick={HandleNav} className="md:hidden cursor-pointer pl-24">

        <TfiAlignJustify size={25}/>

        </div>

        </div>

        

        <div className={menuOpen? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-100 p-10 ease-in duration-500" : "fixed left-[-100%] top-0  ease-in duration-500  p-10"}>

          <div  className="flex w-full items-center justify-end">
            <div onClick={HandleNav} className="cursor-pointer">
            <TfiClose size={25}/>
            
            </div>
          </div>

          <div className="flex flex-col py-4">
        
        <ul className="py-4 text-[#000000]" >
          <Link href="/" onClick={()=>setMenuOpen(false)}>
          <li className="ml-10 uppercase hover:border-b text-xl">Home</li></Link>


            <Link href="/about" onClick={()=>setMenuOpen(false)}>
          <li  className="ml-10 uppercase hover:border-b text-xl">About</li>

          </Link>

          

          <Link href="/films" onClick={()=>setMenuOpen(false)}>
          <li className="ml-10 uppercase hover:border-b text-xl">Wedding Films</li>

          </Link>


          <Link href="/photos" onClick={()=>setMenuOpen(false)}>
          <li className="ml-10 uppercase hover:border-b text-xl">Wedding Photography</li>

          </Link>

         
          <Link href="/contact" onClick={()=>setMenuOpen(false)}>
          <li className="ml-10 uppercase hover:border-b text-xl">Contact</li>

          </Link>
          


        </ul>
        
        </div> 


        </div>


    </nav>


  )
}