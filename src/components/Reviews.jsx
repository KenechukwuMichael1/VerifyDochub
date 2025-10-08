import React from 'react'

export default function Reviews() {
  return (
    <>
      <div className="bg-[#F4F7FF] w-full mb-30 pt-20">
        <div className="w-4/5 mx-auto">
          <div className="text-center mx-auto">
            <h3 className="text-[38px] leading-[100%] text-[#333] font-bold ">What Our Users Say</h3>
            <p className="text-xl text-[#666] font-normal leading-[100%] mt-2">Hear from patients, hospitals, and doctors who trust our platform</p>
          </div>

          <div className="flex justify-between gap-10 mt-15">
            <div className="bg-white rounded-xl w-7/20 p-5">
              <div className="flex space-x-2">
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
              </div>
              <p className="mt-6 text-left text-[18px] leading-5.5 text-[#333] ">
                "Found an excellent cardiologist within minutes. The booking process was seamless and the doctor was professional and caring."
              </p>
              <div className="flex space-x-5 mt-6">
                <img src="imgs/girl-white-dress.jpg" className="rounded-[50%] w-14.5 h-14.5 object-cover" />

                <div className="flex flex-col space-y-[5px]">
                  <p className="text-[#333] text-[22px] leading-[100%] font-medium">Maria Rodriguez</p>
                  <p className="text-[#666] text-[18px] font-normal">Patient</p>
                </div>
              </div>

            </div>
            <div className="bg-white rounded-xl w-7/20 p-5">
              <div className="flex space-x-2">
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
              </div>
              <p className="mt-6 text-left text-[18px] leading-5.5 text-[#333] ">
                "VerifyDoctor Hub has streamlined our hiring process. We've reduced our time-to-hire by 60% and found excellent specialists."
              </p>
              <div className="flex space-x-5 mt-6">
                <img src="imgs/girl-red-dress.jpg" className="rounded-[50%] w-14.5 h-14.5 object-cover" />

                <div className="flex flex-col space-y-[5px]">
                  <p className="text-[#333] text-[22px] leading-[100%] font-medium">Dr. Anabel Thompson</p>
                  <p className="text-[#666] text-[18px] font-normal">HR Director, General Hospital</p>
                </div>
              </div>

            </div>
            <div className="bg-white rounded-xl w-7/20 p-5">
              <div className="flex space-x-2">
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
                <img src="icons/star.svg" />
              </div>
              <p className="mt-6 text-left text-[18px] leading-5.5 text-[#333] ">
                "The platform has helped me connect with more patients and hospitals. The verification process gives everyone confidence in the system."
              </p>
              <div className="flex space-x-5 mt-6">
                <img src="imgs/man-in-suit.jpg" className="rounded-[50%] w-14.5 h-14.5 object-cover" />

                <div className="flex flex-col space-y-[5px]">
                  <p className="text-[#333] text-[22px] leading-[100%] font-medium">David Kim</p>
                  <p className="text-[#666] text-[18px] font-normal">Dermatologist</p>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-30">
            <p className="text-xl text-center text-[#333] leading-6 text-[18px] font-normal mt-2">Trusted by Leading Healthcare Organizations</p>

            <div className="mt-20 flex justify-between w-9/10">
              <div className="border border-[#DAE4FF] bg-white px-6 py-3 rounded-xl text-[#4A5568] font-medium w-15/100"> General Hospital</div>
              <div className="border border-[#DAE4FF] bg-white px-6 py-3 rounded-xl text-[#4A5568] font-medium w-15/100"> General Hospital</div>
              <div className="border border-[#DAE4FF] bg-white px-6 py-3 rounded-xl text-[#4A5568] font-medium w-1/5"> General Hospital</div>
              <div className="border border-[#DAE4FF] bg-white px-6 py-3 rounded-xl text-[#4A5568] font-medium w-1/5"> General Hospital</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
