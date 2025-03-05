import React from "react";

const Page = () => {
  return (
    <div className="py-20 bg-yellow-300">
      <div className="container mt-10">
        <h1 className="text-6xl">
          Experience the Future of <br /> Work with Next-Space.
        </h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam
          vel earum sit eligendi!
        </p>

        <div className="relative mt-8 w-full h-auto">
          <button className="absolute border-r-8 border-t-8 border-b-8 border-yellow-300 top-0 left-0 px-4 py-3 bg-teal-400 rounded-br-2xl">
            Get Started
            <span className="size-4 bg-yellow-300 absolute -top-2 -right-6" />
            <span className="size-4 bg-slate-100 rounded-tl-2xl absolute -top-2 -right-6" />
            
            
            <span className="size-4 bg-yellow-300 absolute -bottom-6 -left-0" />
            <span className="size-4 bg-slate-100 rounded-tl-2xl absolute -bottom-6 -left-0" />
          </button>
          <div className="w-full rounded-2xl h-[550px] bg-slate-100 overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400"
              alt="placeholder"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
