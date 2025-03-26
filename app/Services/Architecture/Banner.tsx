import React from "react";

const Banner = () => {
  return (
    <div className="w-full my-32">
      <div className="w-full container p-10 bg-[url('https://img.freepik.com/free-photo/empty-save-texture-room-light_1258-175.jpg')] bg-center bg-no-repeat bg-cover">
        <h2 className="text-3xl font-[600] font-Primary text-slate-950">
          Let&apos;s Design Your Dream Space!
        </h2>
        <p className="text-slate-950 mt-2">
          Whether you&apos;re looking to revamp your home, transform your office, or
          create an exceptional commercial space, Zaaviyan is here to bring your
          vision to reality.
        </p>
        <button className="relative mt-5 h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group">
          <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#F59E0B] via-[#D97706] to-[#92400E]">
            <div className="absolute inset-0 bg-[#7C2D12] rounded-lg opacity-90" />
          </div>
          <div className="absolute inset-[2px] bg-[#7C2D12] rounded-lg opacity-95" />
          <div className="absolute inset-[2px] bg-gradient-to-r from-[#7C2D12] via-[#B45309] to-[#7C2D12] rounded-lg opacity-90" />
          <div className="absolute inset-[2px] bg-gradient-to-b from-[#F59E0B]/40 via-[#B45309] to-[#92400E]/30 rounded-lg opacity-80" />
          <div className="absolute inset-[2px] bg-gradient-to-br from-[#FBBF24]/10 via-[#B45309] to-[#7C2D12]/50 rounded-lg" />
          <div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(251,191,36,0.15)] rounded-lg" />
          <div className="relative flex items-center justify-center gap-2">
            <span className="text-lg font-normal bg-gradient-to-b from-[#FFEDD5] to-[#FDE68A] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(251,191,36,0.4)] tracking-tighter">
              Contact us
            </span>
          </div>
          <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#7C2D12]/20 via-[#FBBF24]/10 to-[#7C2D12]/20 group-hover:opacity-100 rounded-lg" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
