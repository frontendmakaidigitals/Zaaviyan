"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { cn } from "../lib/utils";
import SmallLoadingSpinner from "../App_Chunks/Components/Loading";
const Page = () => {
  return (
    <div className="">
      <div className="  ">
        <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#66806a] via-[#b4c6a6] to-[#ffc286] pt-24 lg:pt-40 ">
          <div className="container grid h-[370px] lg:h-[250px] grid-cols-1 gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div className="flex flex-col h-full justify-center lg:justify-between gap-6 pb-5">
              {" "}
              <div className="">
                <h1 className="text-5xl font-sans text-slate-950 font-[500]">
                  Contact Us
                </h1>
                <p className="mt-2 text-slate-900">
                  Looking for a Fitout and Construction Partner?
                </p>
                <p className="text-slate-900">Get in Touch With Us</p>
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
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [checkbox, setCheckBox] = useState(false);

  const [errors, setErrors] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
    checked: false,
  });
  const [status, setStatus] = useState("");

  const validate = () => {
    const tempErrors = {
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      message: "",
      checked: false,
    };
    if (!formData.fullName.trim())
      tempErrors.fullName = "Full Name is required";
    if (!formData.companyName.trim())
      tempErrors.companyName = "Company Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    if (!checkbox) tempErrors.checked = true;
    setErrors(tempErrors);
    const hasErrors = Object.values(tempErrors).some(
      (error) => error !== "" && error !== false
    );
    return !hasErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) {
      console.log("return", errors);
      return;
    }
    setStatus("Sending...");
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setStatus("ok");
        setFormData({
          fullName: "",
          companyName: "",
          phone: "",
          email: "",
          message: "",
        }); // Reset form
        setCheckBox(false);
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("Error sending email.");
    }
  };

  
  return (
    <div className=" w-full bg-white shadow-md rounded-b-md px-3  lg:px-12 py-12">
      <form>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8">
          <div>
            <Input
              placeholder="Your name"
              name={"fullName"}
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm">{errors.fullName}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="Your email"
              name={"email"}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="Your phone"
              name={"phone"}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm">{errors.phone}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="Your company name"
              name={"companyName"}
              value={formData.companyName}
              onChange={handleChange}
            />
            {errors.companyName && (
              <p className="text-red-600 text-sm">{errors.companyName}</p>
            )}
          </div>

          <div className="col-span-full">
            <label>Message (Optional)</label>
            <textarea
              rows={8}
              className="resize-none mt-2 w-full rounded-md focus:outline-black bg-transparent placeholder:text-muted-foreground border text-sm border-black px-3 py-1 text-base shadow-sm transition-colors "
              placeholder="Enter your message"
              value={formData.message}
              name={"message"}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message}</p>
            )}
          </div>
        </div>
        <div className="flex items-center mt-2 space-x-2">
          <Checkbox
            id="terms"
            checked={checkbox}
            onCheckedChange={() => {
              setErrors((prev) => ({
                ...prev, // Keep existing errors
                checked: false, // Update 'checked' error
              }));
              setCheckBox(!checkbox);
            }}
          />
          <label
            htmlFor="terms"
            className={`${
              errors.checked ? "text-red-500" : ""
            } text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
          >
            I accept the terms and conditions.
          </label>
        </div>
        <button
          type="submit"
          className={cn(
            `border border-slate-400 mt-10 px-4 py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`,
            status === "ok" && "bg-[#25D366] text-green-950"
          )}
          disabled={status === "Sending..." || status === "ok"}
          onClick={handleSubmit}
        >
          {status === "Sending..." ? (
            <>
              <SmallLoadingSpinner />
              Sending...
            </>
          ) : status === "ok" ? (
            "Submitted Sucessfully"
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};
