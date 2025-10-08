import Navbar from "./Navbar";

export default function Hero() {

  return (
    <>
      <div className="py-8 bg-[#F4F7FF] w-full">
        <Navbar />

        <div className="md:pl-24 mt-30 flex flex-col md:flex-row md:justify-between md:gap-5 md:items-center">
          <div className="px-4 w-full md:w-1/2 flex flex-col gap-3">
            <h1 className="text-[#333] text-5xl font-bold text-left">Find <span className="text-[#1565D8]">Verified Doctors</span> Anytime, Anywhere</h1>
            <p className="text-[#333] md:w-3/5 text-left">Whether you're a hospital hiring or a patient seeking care, connect with verified, licensed doctors instantly.</p>
            <div className="flex gap-3 items-center">
              <button className="bg-[#1565D8] hover:bg-[#0955C2] text-white py-2.5 px-8 rounded-lg shadow  text-lg font-medium cursor-pointer">Find a doctor</button>
              <button className="border border-[#1565D8] rounded-lg py-2.5 px-8 text-[#1565D8] text-lg font-medium cursor-pointer">Join as a Doctor</button>
            </div>
            <div className="flex gap-4.5">
              <div className="flex gap-2">
                <img src="/icons/verified-i.svg" className="w-4" />
                <p> Verified Doctors</p>
              </div>
              <div className="flex gap-2">
                <img src="/icons/shield-i.svg" className="w-3" />
                <p> Secure Platform</p>
              </div>
              <div className="flex gap-2">
                <img src="/icons/hospital-i.svg" className="w-3.5" />
                <p> Trusted Hospitals</p>
              </div>
            </div>
          </div>
          <div className="relative md:max-w-3/5">
            {/* <!-- Original image --> */}
            {/* <div className=" w-72 h-72 rounded-full border border-blue-400"></div> */}
            {/* <div className=" w-72 h-72 rounded-full border border-blue-400"></div> */}
            <img src="/imgs/doctor-img.png" alt="Two doctors and a patient holding a phone" className="md:w-full" />

            <div className="absolute flex bg-[#f4f7ff] h-19 sm:h-24 
          bottom-[-35px] w-full blur-lg z-10"></div>

            {/* <img
            src="/imgs/doctor-img.png"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 w-full h-full 
           blur-lg pointer-events-none
           [mask-image:linear-gradient(to_bottom,transparent_70%,black_100%)] 
           [mask-repeat:no-repeat] [mask-size:100%_100%]
           scale-[1.02]" /> */}
          </div>

        </div>

        <div className="mx-auto pt-28 w-4/5 flex justify-between">
          <div>
            <h3 className="font-bold text-4xl text-[#1565D8] text-center">1,000+</h3>
            <p className="text-lg ">Verified Doctors</p>
          </div>
          <div>
            <h3 className="font-bold text-4xl text-[#1565D8] text-center">500+</h3>
            <p className="text-lg ">Partner Hospital</p>
          </div>
          <div>
            <h3 className="font-bold text-4xl text-[#1565D8] text-center">1M+</h3>
            <p className="text-lg">Successful Consultation</p>
          </div>
        </div>
      </div>
    </>

  )
}