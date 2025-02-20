import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[99vh] w-full relative">
      <div className="absolute w-full z-10 top-1/2   -translate-y-1/2">
      <div className="container">
      <p className="text-slate-100 text-2xl">30 Years Experience</p>
        <h2 className="text-7xl text-slate-100 font-[700] font-Primary">
         We help build <br /> 
         Innovative prodcuts.
        </h2>
        <p className="text-md text-slate-100 mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="px-5 py-2 bg-lime-300 rounded-full mt-5">
          Contact us
        </button>
      </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-slate-950/40" />
      <img
        className="w-full h-full object-cover"
        src={
          "https://images.pexels.com/photos/30767086/pexels-photo-30767086/free-photo-of-iconic-architecture-in-san-francisco-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />

      <div className="absolute z-[9] flex justify-end xl:justify-center items-center  bottom-0 left-0 w-full h-[30px]">
        <div className="w-0 h-0 border-l-transparent border-l-[30px] border-b-[30px] border-b-white"></div>
        <div className="w-[40vw] bg-white h-full"></div>
        <div className="w-0 h-0 border-r-[30px] hidden xl:block border-l-transparent  border-r-transparent border-b-[30px] border-b-white"></div>
      </div>
    </div>
  );
};

export default HeroSection;
