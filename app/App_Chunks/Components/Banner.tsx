import React from "react";

const Banner = () => {
  return (
    <div className="container">
      <div className="p-7 relative mt-16 mb-8 rounded-2xl overflow-hidden aspect-[5/1] bg-gray-900 ">
        <div className="w-full h-full top-0 left-0 absolute ">
          <img
            src={"Media/bannerBg.png"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full relative z-[3] h-full flex justify-between items-center ">
          <div>
            <p className="text-4xl text-slate-50 font-[500]">
              Request for a proposal today
            </p>
            <p className="text-slate-200 mt-1">Get connected to our Team of Experts</p>
          </div>
          <button className="bg-white/70 hover:bg-white/90 border border-gray-300 backdrop-filter backdrop-blur-lg px-5 py-2 rounded-full">
            Get Expert Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
