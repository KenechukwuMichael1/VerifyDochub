import React from 'react'
import img1 from "/imgs/male-doctor.jpg";

export default function VerifiedDoctors() {
  return (
    <>

      <div className=" mt-30 w-full px-20 pb-26">
        <div className="text-center">
          <h3 className="text-[38px] text-[#333] font-bold">Meet Our Verified Doctors</h3>
          <p className="text-xl text-[#666] font-normal">Connect with experienced, licensed healthcare professionals who have been thoroughly verified</p>
        </div>

        {/* Verified doctors card */}
        <div className="W-full mx-auto mt-10 px-10 flex justify-between">
          {/* doc 1 */}

          <div className="border flex flex-col space-y-2.5 items-center border-[#F4F7FF] rounded-xl shadow-[0px_4px_7px_rgba(0,0,0,0.1)] w-3/10 py-10 px-5 cursor-pointer overflow-hidden transition-transform duration-400 hover:scale-110">
            <div className="w-25 rounded-[50%] border-2 border-[#DAE4FF]">
              <img className="w-25 h-25 object-cover  rounded-[50%]" src={img1} />
            </div>
            <h4 className="text-[26px] flex items-center gap-1 text-[#333]">Dr.Michael Obi
              <img src="icons/verified-doc.svg" />
            </h4>

            <p className="text-lg text-[#1565D8]">Cardiologist</p>
            <p className="text-sm text-[#666]">12 years experience</p>
            <p className="flex gap-2 text-sm text-[#666]">
              <img src="icons/location.svg" /> Abuja, Nigeria
            </p>
            <p className="flex gap-2 text-[#009721]">
              <img src="icons/time.svg" /> Available
            </p>
            <button className="bg-[#1565D8] inset-shadow-[0px_4px_4px_rgba(7, 59, 134, 0.4)] hover:bg-[#0955C2] text-white py-2.5 px-8 rounded-lg text-lg font-medium cursor-pointer w-full"> Find a doctor</button>
          </div>

          {/* doc 2 */}
          <div className="border flex flex-col space-y-2.5 items-center border-[#F4F7FF] rounded-xl shadow-[0px_4px_7px_rgba(0,0,0,0.1)] w-3/10 py-10 px-5 cursor-pointer overflow-hidden transition-transform duration-400 hover:scale-110">
            <div className="w-25 rounded-[50%] border-2 border-[#DAE4FF]">
              <img className="w-full h-25 object-cover rounded-[50%]" src="imgs/female-doctor-coat.jpg" />
            </div>
            <h4 className="text-[26px] flex items-center gap-1 text-[#333]">Dr.Ada Obi
              <img src="icons/verified-doc.svg" />
            </h4>

            <p className="text-lg text-[#1565D8]">Neurologist</p>
            <p className="text-sm text-[#666]">12 years experience</p>
            <p className="flex gap-2 text-sm text-[#666]">
              <img src="icons/location.svg" /> Abuja, Nigeria
            </p>
            <p className="flex gap-2 text-[#009721]">
              <img src="icons/time.svg" /> Available
            </p>
            <button className="bg-[#1565D8] inset-shadow-[0px_4px_4px_rgba(7, 59, 134, 0.4)] hover:bg-[#0955C2] text-white py-2.5 px-8 rounded-lg   text-lg font-medium cursor-pointer w-full">Find a doctor</button>
          </div>

          {/* doc 3 */}
          <div className="border flex flex-col space-y-2.5 items-center border-[#F4F7FF] rounded-xl shadow-[0px_4px_7px_rgba(0,0,0,0.1)] w-3/10 py-10 px-5 cursor-pointer overflow-hidden transition-transform duration-400 hover:scale-110">
            <div className="w-25 rounded-[50%] border-2 border-[#DAE4FF]">
              <img className="w-25 h-25 object-cover rounded-[50%]" src="imgs/doctor-with-glasses.jpg" />
            </div>
            <h4 className="text-[26px] flex items-center gap-1 text-[#333]">Dr.Sarah Williams
              <img src="icons/verified-doc.svg" />
            </h4>

            <p className="text-lg text-[#1565D8]">Pediatrician</p>
            <p className="text-sm text-[#666]">12 years experience</p>
            <p className="flex gap-2 text-sm text-[#666]">
              <img src="icons/location.svg" /> Abuja, Nigeria
            </p>
            <p className="flex gap-2 text-[#009721]">
              <img src="icons/time.svg"/>Available
            </p>
            <button className="bg-[#1565D8] inset-shadow-[0px_4px_4px_rgba(7, 59, 134, 0.4)] hover:bg-[#0955C2] text-white py-2.5 px-8 rounded-lg text-lg font-medium cursor-pointer w-full "> Find a doctor</button>
            
          </div>

        </div>
        <div className="flex justify-center">
          <button href="" className="border border-[#1565D8] rounded-lg text-[#1565D8] px-8 py-2.5 cursor-pointer mt-17 font-medium text-lg">Find A Doctor</button>
        </div>
      </div>

    </>
  )
}
