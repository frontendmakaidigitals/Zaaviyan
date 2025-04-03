"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import SmallLoadingSpinner from "@/app/App_Chunks/Components/Loading";
const Form = () => {
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
    <div className="w-full mt-40">
      <div className="lg:container grid grid-cols-1 lg:grid-cols-[.7fr_1.3fr]">
        <div className="w-full hidden lg:block bg-slate-50 h-[660px] overflow-hidden rounded-l-xl">
          <img
            src={"/Media/contact form.jpg"}
            className="w-full object-cover h-full"
          />
        </div>
        <div className="p-7 rounded-r-xl bg-slate-100">
          <p className="text-6xl lg:text-4xl font-[600] font-Primary">
            Get your quote
          </p>
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
                  name={"fullName"}
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div>
                <div>
                  <label>Company name</label>
                </div>
                <input
                  className="w-full mt-1 border px-5 py-3 border-slate-800  rounded-xl"
                  placeholder="Enter you company..."
                  name={"companyName"}
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && (
                  <p className="text-red-600 text-sm">{errors.companyName}</p>
                )}
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
                  name={"phone"}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm">{errors.phone}</p>
                )}
              </div>
              <div>
                <div>
                  <label>Email address</label>
                </div>
                <input
                  className="w-full mt-1 border px-5 py-3 border-slate-800  rounded-xl"
                  type="email"
                  placeholder="Enter you email..."
                  name={"email"}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="w-full mt-5">
              <div>
                <label>Message</label>
              </div>
              <textarea
                placeholder="Enter your message..."
                className="resize-none mt-1 px-5 py-3 h-40 w-full border border-slate-800  rounded-2xl"
                value={formData.message}
                name={"message"}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message}</p>
              )}
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
                  <SmallLoadingSpinner /> Sending...
                </>
              ) : status === "ok" ? (
                "Submitted Sucessfully"
              ) : (
                "Submit"
              )}
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
