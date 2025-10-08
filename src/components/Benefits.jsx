import { useEffect, useState } from "react";
import img1 from "/imgs/hospital-img.jpg";
import img2 from "/imgs/patients-img.jpg";
import img3 from "/imgs/doctors-img.jpg";


export default function Benefits() {
  const [activeTab, setActiveTab] = useState("tab1");

  // Preload all images once
  useEffect(() => {
    [img1, img2, img3].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);


  const tabs = [
    { id: "tab1", label: "Hospitals", img: "./icons/hospital-i.svg" },
    { id: "tab2", label: "Patients", img: "./icons/heart-i.svg" },
    { id: "tab3", label: "Doctors", img: "./icons/stethoscope-i.svg" }
  ]


  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className="pt-39 w-full">
          <div className="text-center">
            <h3 className="text-[38px] text-[#333] font-bold">Benefits for Everyone</h3>
            <p className="text-xl text-[#666] font-normal">Our platform serves hospitals, patients, and doctors with tailored solutions</p>
          </div>
        </div>
        <div className="mt-15 w-full mx-auto px-19">
          <div className="bg-[#F4F7FF] p-2 flex space-x-4 h-15 rounded-3xl">
            {tabs.map((tab) => (
              <button key={tab.id} className={`w-8/25 py-2.5 px-17.5 rounded-full flex items-center gap-4.5 cursor-pointer ${activeTab === tab.id ? "bg-[#fff]" : "transparent"} `}
                onClick={() => setActiveTab(tab.id)}>
                <img className="w-5" src={tab.img} />
                <p className="text-xl text-[#666] font-normal">{tab.label}</p>
              </button>
            ))}

            {/* <button className="w-8/25 py-2.5 px-17.5 rounded-full flex items-center gap-2.5 ">
              <img className="w-5" src="/icons/heart-i.svg" />
              <p className="text-xl text-[#666] font-normal">Patients</p>
            </button>
            <button className="w-8/25 py-2.5 px-17.5 rounded-full flex items-center gap-2.5 ">
              <img className="w-5" src="/icons/stethoscope-i.svg" />
              <p className="text-xl text-[#666] font-normal">Doctors</p>
            </button> */}
          </div>
          <div className="bg-white w-full p-10 mt-15 border shadow-[0_4px_7px_rgba(0,0,0,0.1)] border-[#F4F7FF] rounded-xl">
            {/* {tabContent[activeTab]} */}
            <div className={`flex space-x-20 justify-between items-start ${activeTab === "tab1" ? "block" : "hidden"} `}>
              <div className="w-1/2">
                <div className="flex mt-2.5 justify-between w-full">
                  <h3 className="text-[28px] text-[#333] font-bold">For Hospitals</h3>

                  <div>
                    <p className="text-xl text-[#00BFA6] font-bold text-right">85%</p>
                    <p className="text-sm text-[#999] ">Faster hiring process</p>
                  </div>
                </div>
                <ul className="pl-8 text-xl text-[#666] font-normal list-disc mt-10">

                  <li>Simplify recruitment process with pre-verified specialists</li>
                  <li>Access to extensive database of qualified doctors</li>
                  <li>Reduce hiring costs and time-to-fill positions</li>
                  <li>Flexible staffing solutions for temporary needs</li>
                </ul>

              </div>
              <div className="w-1/2">
                <img src={img1} alt="hospital" className="min-w-full rounded-xl " />
              </div>
            </div>
            {/* tab2 */}
            <div className={`flex space-x-20 justify-between items-start ${ activeTab === "tab2" ? "block" : "hidden"}`}>
              <div className="w-1/2">
                <div className="flex mt-2.5 justify-between w-full">
                  <h3 className="text-[28px] text-[#333] font-bold">For Patients</h3>

                  <div>
                    <p className="text-xl text-[#00BFA6] font-bold text-right">24/7</p>
                    <p className="text-sm text-[#999] ">Doctor availability</p>
                  </div>
                </div>
                <ul className="pl-8 text-xl text-[#666] font-normal list-disc mt-10">

                  <li>Fast access to verified healthcare professionals</li>
                  <li>Read trusted reviews and ratings from other patients
                  </li>
                  <li>Easy online booking and appointment management</li>
                  <li> Transparent pricing and insurance verification</li>
                </ul>

              </div>
              <div className="w-1/2">
                <img src={img2} alt="hospital" className="min-w-full rounded-xl " />
              </div>
            </div>

            {/* tab3 */}
            <div className={`flex space-x-20 justify-between items-start ${ activeTab === "tab3" ? "block" : "hidden"}`}>
            <div className="w-1/2">
              <div className="flex mt-2.5 justify-between w-full">
                <h3 className="text-[28px] text-[#333] font-bold">For Doctor</h3>

                <div>
                  <p className="text-xl text-[#00BFA6] font-bold text-right">10k+</p>
                  <p className="text-sm text-[#999]">Active doctors</p>
                </div>
              </div>
              <ul className="pl-8 text-xl text-[#666] font-normal list-disc mt-10">
                <li>Build professional visibility and online presence</li>
                <li>Flexible work opportunities and scheduling</li>
                <li>Grow your career with new opportunities</li>
                <li>Secure platform for patient interactions</li>
              </ul>

            </div>
            <div className="w-1/2">
              <img src={img3} alt="hospital" className="min-w-full rounded-xl " />
            </div>
          </div>

        </div>
      </div>
    </div >
    </>
  )
}
