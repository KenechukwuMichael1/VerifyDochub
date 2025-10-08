import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/*w-4xl  */}
      <div className="container py-3.5 px-4 flex justify-between md:space-x-2 items-center w-9/10 md:w-3/4 z-30 bg-white fixed top-10 left-1/2 -translate-x-1/2 rounded-2xl shadow-[0px_3px_7px_rgba(0,0,0,0.05)]">
        <h2 className="font-bold text-[#1565D8] text-2xl">VerifyDoctor Hub</h2>

        {!isOpen && (
          <button onClick={toggleMenu} className="cursor-pointer md:hidden z-20 duration-300 ease-in">
            <HiMenu className="text-3xl text-[#1565D8]" />
          </button>
        )}
        {isOpen && (
          <button onClick={toggleMenu} className="cursor-pointer md:hidden z-20 duration-300 ease-in">
            <IoClose className="text-3xl text-[#1565D8]" />
          </button>


        )}


        <ul className="hidden md:flex space-x-2 md:space-x-4">
          <li><a href="#" className="text-[16px] lg:text-md text-[#666666]">About</a></li>
          <li><a href="#" className="text-[16px] lg:text-md text-[#666666]">How it works</a></li>
          <li><a href="#" className="text-[16px] lg:text-md text-[#666666]">For Hosptitals</a></li>
          <li><a href="#" className="text-[16px] lg:text-md text-[#666666]">For Doctors</a></li>
          <li><a href="#" className="text-[16px] lg:text-md text-[#666666]">Pricing</a></li>
        </ul>


        <a href="#" className="hidden md:block bg-[#1565D8] hover:bg-[#0955C2] text-white py-2.5 px-2 rounded-lg shadow cursor-pointer">Find a Doctor</a>


        {isOpen && (
          <div className="absolute w-full left-0 rounded-2xl top-18 md:hidden bg-white h-80 shadow-[0px_3px_7px_rgba(0,0,0,0.05)] py-4 flex flex-col items-center space-y-4 ">
            <ul className="md:hidden flex flex-col space-y-4 items-center">
              <li><a href="#" className="text-lg text-[#666]">About</a></li>
              <li><a href="#" className="text-lg text-[#666]">How it works</a></li>
              <li><a href="#" className="text-lg text-[#666]">For Hosptitals</a></li>
              <li><a href="#" className="text-lg text-[#666]">For Doctors</a></li>
              <li><a href="#" className="text-lg text-[#666]">Pricing</a></li>
            </ul>

            <div href="#" className="block bg-[#1565D8] hover:bg-[#0955C2] text-white py-2.5 px-8 rounded-lg">Find a Doctor</div>
          </div>
          // [#1565D8]
        )}
      </div>
    </>
  )
}