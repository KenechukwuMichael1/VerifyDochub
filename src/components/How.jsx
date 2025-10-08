export default function How() {

  return (
    <>
      <div className="pt-20 px-26 w-full">
        <div className="text-center">
          <h3 className="text-[38px] text-[#333] font-bold">How it works</h3>
          <p className="text-xl text-[#666] font-normal">Simple, secure, and efficient way to connect with verified healthcare professionals</p>
        </div>
        <div className="w-full mt-8 flex justify-between items-center">

          <div className="w-71 py-6 px-5 border border-[#F4F7FF] rounded-xl shadow-[0_5px_6px_1px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
            <div className="w-15 h-15 bg-[#DAE4FF] rounded-[50%] flex justify-center items-center ">
              <img src="/icons/search-i.svg" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <h4 className="text-[22px] text-[#0B1220] font-medium">Search Doctors</h4>
              <p className="text-[16px] text-[#666] ">
                Browse verified doctors by specialty, location, and availability
              </p>
            </div>
          </div>
          <div className="w-71 py-6 px-5 border border-[#F4F7FF] rounded-xl shadow-[0_5px_6px_1px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
            <div className="w-15 h-15 bg-[#DAE4FF] rounded-[50%] flex justify-center items-center ">
              <img src="/icons/profile-check.svg" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <h4 className="text-[22px] text-[#0B1220] font-medium">View Profiles</h4>
              <p className="text-[16px] text-[#666] ">Review credentials, experience, and patient ratings</p>
            </div>
          </div>
          <div className="w-71 py-6 px-5 border border-[#F4F7FF] rounded-xl shadow-[0_5px_6px_1px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
            <div className="w-15 h-15 bg-[#DAE4FF] rounded-[50%] flex justify-center items-center">
              <img src="/icons/booked-i.svg" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <h4 className="text-[22px] text-[#0B1220] font-medium">Book Consultation</h4>
              <p className="text-[16px] text-[#666]">
                Schedule appointments directly through our platform
              </p>
            </div>
          </div>
          <div className="w-71 py-6 px-5 border border-[#F4F7FF] rounded-xl shadow-[0_5px_6px_1px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
            <div className="w-15 h-15 bg-[#DAE4FF] rounded-[50%] flex justify-center items-center ">
              <img src="/icons/lightning-i.svg" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <h4 className="text-[22px] text-[#0B1220] font-medium">Get Matched</h4>
              <p className="text-[16px] text-[#666] ">
                Connect instantly with the right healthcare professional
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}