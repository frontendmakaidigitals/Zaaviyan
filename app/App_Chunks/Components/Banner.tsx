import React from "react";

const Banner = () => {
  return (
    <div className="container relative my-8 rounded-2xl overflow-hidden aspect-[5/1] bg-purple-600 ">
        <div className="w-full h-full top-0 left-0 absolute ">
            <img src={'media/bannerBg.png'} className="w-full h-full object-cover" />
        </div>
      <div className="w-full relative z-[3] h-full flex justify-between items-center ">
        <p className="text-4xl text-slate-50 font-[500]">
          Request for a proposal today
        </p>
        <button className="bg-white/70 hover:bg-white/90 border border-gray-300 backdrop-filter backdrop-blur-lg px-5 py-2 rounded-full">
          Get Expert Consultation
        </button>
      </div>
    </div>
  );
};

export default Banner;
