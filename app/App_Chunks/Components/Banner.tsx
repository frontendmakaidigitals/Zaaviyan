'use client'
import React from "react";
import { useRouter } from "next/navigation";
const Banner = () => {
  const router = useRouter();
  return (
    <div className="container">
      <div className="p-7 relative mt-16 mb-8 rounded-2xl overflow-hidden lg:aspect-[5/1] bg-gray-900 ">
        <div className="w-full h-full top-0 left-0 absolute ">
          <img
            src={"Media/bannerBg.png"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full relative z-[3] h-full flex flex-col lg:flex-row justify-between items-center ">
          <div>
            <p className="text-2xl text-center lg:text-start lg:text-4xl text-slate-50 font-[500]">
              Request for a proposal today
            </p>
            <p className="text-slate-200 text-center lg:text-start mt-1">
              Get connected to our Team of Experts
            </p>
          </div>
          <button onClick={()=> router.push('/Contact')} className="bg-white/70 text-xs mt-5 lg:mt-0 lg:text-lg hover:bg-white/90 border border-gray-300 backdrop-filter backdrop-blur-sm px-5 py-2 rounded-full">
            Get Expert Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
