"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
const Page = () => {
  return (
    <div className="">
      <div className="  ">
        <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#66806a] via-[#b4c6a6] to-[#ffc286] pt-24 lg:pt-40 ">
          <div className="container grid h-[370px] lg:h-[250px] grid-cols-1 gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div className="flex flex-col h-full justify-center lg:justify-between gap-6 pb-5">
              {" "}
              <div className="">
                <h1 className="text-5xl font-sans text-slate-50 font-[500]">
                  Contact Us
                </h1>
                <p className="mt-2 text-slate-100">
                  Looking for a Fitout and Construction Partner?
                </p>
                <p className="text-slate-100">Get in Touch With Us</p>
              </div>
              <div className="flex items-center gap-5 justify-start">
                <LinkedinLogo weight="fill" className="text-3xl" />
                <InstagramLogo weight="fill" className="text-3xl" />
                <TwitterLogo weight="fill" className="text-3xl" />
                <YoutubeLogo weight="fill" className="text-3xl" />
              </div>
            </div>

            <div className="relative ">
              <div className="w-full flex items-center gap-4 px-5 rounded-t-md py-5 bg-slate-200 absolute bottom-0 left-0">
                <div className="w-20">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={
                        "https://cdn-icons-png.flaticon.com/512/2250/2250206.png"
                      }
                    />
                  </div>
                </div>
                <p className="text-sm lg:text-lg">
                  Write us a few words about your project, and we’ll prepare a
                  proposal for you within{" "}
                  <span className="font-semibold">24</span> hours.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 pb-32">
          <div className="container grid grid-cols-1  gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div className="mt-12 order-1 lg:order-2">
              <h2 className="text-4xl mt-4">What will be next step?</h2>
              <p className="mt-3">You are one step perfect product</p>

              <div className="mt-14">
                <>
                  <div className="flex items-start gap-2 z-10 relative after:h-full after:w-[1px] after:absolute after:contents-[' '] after:-z-10 after:top-5 after:left-[.6rem] after:bg-slate-900">
                    <div className="mt-1">
                      <div className="size-5 bg-blue-300 rounded-full flex justify-center items-center">
                        <div className="size-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <p className="text-xl">We Will Prepare a Proposal</p>
                      <p className="mt-1 text-md">
                        After understanding your requirements, we will craft a
                        detailed proposal outlining the scope, timeline, and
                        cost of your project.
                      </p>
                    </div>
                  </div>
                </>
                <>
                  <div className="flex mt-4 items-start gap-2 z-10 relative after:h-full after:w-[1px] after:absolute after:contents-[' '] after:-z-10 after:top-5 after:left-[.6rem] after:bg-slate-900">
                    <div className="mt-1">
                      <div className="size-5 bg-blue-300 rounded-full flex justify-center items-center">
                        <div className="size-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <p className="text-xl">Together, We Discuss It </p>
                      <p className="mt-1 text-sm">
                        We’ll walk you through the proposal, refine details as
                        needed, and ensure the plan aligns perfectly with your
                        vision and expectations.
                      </p>
                    </div>
                  </div>
                </>
                <>
                  <div className="flex mt-4 items-start gap-2  ">
                    <div className="mt-1">
                      <div className="size-5 bg-blue-300 rounded-full flex justify-center items-center">
                        <div className="size-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <p className="text-xl"> Let’s Start Building! </p>
                      <p className="mt-1 text-sm">
                        Once everything is finalized, our expert team will begin
                        construction, ensuring high-quality execution and
                        on-time project delivery.
                      </p>
                    </div>
                  </div>
                </>
              </div>
            </div>
            <div className=" lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const ContactForm = () => {
  return (
    <div className=" w-full bg-white shadow-md rounded-b-md px-3  lg:px-12 py-12">
      <form>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8">
          <Input placeholder="Your name" />
          <Input placeholder="Your email" />
          <Input placeholder="Your phone" />
          <Input placeholder="Your company name" />

          <div className="col-span-full">
            <label>Message (Optional)</label>
            <textarea
              rows={8}
              className="resize-none mt-2 w-full rounded-md focus:outline-black bg-transparent placeholder:text-muted-foreground border text-sm border-black px-3 py-1 text-base shadow-sm transition-colors "
              placeholder="Enter your message"
            />
          </div>
        </div>
        <div className="flex items-center mt-2 space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I accept the terms and conditions.
          </label>
        </div>
        <button className="border border-slate-400 mt-10 px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
