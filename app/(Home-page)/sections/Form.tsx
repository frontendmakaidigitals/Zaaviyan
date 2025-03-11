"use client";
import React from "react";

const Form = () => {
  return (
    <div className="w-full mt-40">
      <div className="lg:container grid grid-cols-1 lg:grid-cols-[.7fr_1.3fr]">
        <div className="w-full hidden lg:block bg-slate-50 h-[660px] overflow-hidden rounded-l-xl">
          <img
            src={
              "/Media/Magic-Pattern.jpg"
            }
            className="w-full object-cover h-full"
          />
        </div>
        <div className="p-7 rounded-r-xl bg-slate-100">
          <p className="text-6xl lg:text-4xl font-[600] font-Primary">Get your quote</p>
          <p className="text-lg mt-2">
            Complete the fields and let us handle the rest. <br /> Our expert
            will contact you as soon as possible.
          </p>
          <form className="mt-6">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              <div className="block">
                <div>
                  <label>Full Name</label>
                </div>
                <input
                  className="w-full mt-1 border px-5 py-3 border-slate-800  rounded-xl"
                  placeholder="Enter you name..."
                />
              </div>
              <div>
                <div>
                  <label>Company name</label>
                </div>
                <input
                  className="w-full mt-1 border px-5 py-3 border-slate-800  rounded-xl"
                  placeholder="Enter you company..."
                />
              </div>
            </div>
            <div className="w-full grid  grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              <div>
                <div>
                  <label>Phone number</label>
                </div>
                <input
                  className="w-full mt-1 border px-5 py-3 border-slate-800  rounded-xl"
                  type="number"
                  placeholder="Enter you phone..."
                />
              </div>
              <div>
                <div>
                  <label>Email address</label>
                </div>
                <input
                  className="w-full mt-1 border px-5 py-3 border-slate-800  rounded-xl"
                  type="email"
                  placeholder="Enter you email..."
                />
              </div>
            </div>
            <div className="w-full mt-5">
              <div>
                <label>Message</label>
              </div>
              <textarea
                placeholder="Enter your message..."
                className="resize-none mt-1 px-5 py-3 h-40 w-full border border-slate-800  rounded-2xl"
              />
            </div>
            <button className="w-full mt-5 rounded-xl text-center py-3 bg-slate-800 text-slate-50">
              Submit
            </button>
          </form>
          <p className="text-center text-xs lg:text-md mt-2">
            By submitting this form, you accept our Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
