"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import SmallLoadingSpinner from "./Loading";
import { Checkbox } from "@/components/ui/checkbox";
const PopUpForm = ({ isOpen, onClose, title }) => {
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
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    | { success: boolean; status: number }
    | { error: string; status: number }
    | null
  >(null);

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

    if (!validate()) {
      console.log("return", errors);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const responseData = await response.json();
        setStatus(responseData.success);
        setFormData({
          fullName: "",
          companyName: "",
          phone: "",
          email: "",
          message: "",
        }); // Reset form
        setCheckBox(false);
        onClose();
      } else {
        const errorData = await response.json();
        setStatus(errorData.error);
      }
    } catch (error) {
      setStatus({
        error: (error as Error).message || "Network error occurred",
        status: 500,
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-[9999] backdrop-filter backdrop-blur-lg inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg  w-[90%] lg:w-xl relative"
          >
            <div className="flex justify-between items-center  mb-4">
              <h2 className="text-3xl font-semibold">{title}</h2>
              <button
                onClick={onClose}
                className=" text-2xl text-gray-500 hover:text-red-700"
              >
                <X />
              </button>
            </div>
            <form className="mt-6">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 mt-5">
                <div className="block">
                  <div>
                    <label>Full Name</label>
                  </div>
                  <input
                    className="w-full mt-1 border px-5 py-2 lg:py-3 border-slate-800  rounded-xl"
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
                    className="w-full mt-1 border px-5 py-2 lg:py-3 border-slate-800  rounded-xl"
                    placeholder="Enter you company..."
                    name={"companyName"}
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  {errors.companyName && (
                    <p className="text-red-600 text-sm">{errors.companyName}</p>
                  )}
                </div>
                <div>
                  <div>
                    <label>Phone number</label>
                  </div>
                  <input
                    className="w-full mt-1 border px-5 py-2 lg:py-3 border-slate-800  rounded-xl"
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
                    className="w-full mt-1 border px-5 py-2 lg:py-3 border-slate-800  rounded-xl"
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
                <div className="w-full lg:col-span-2">
                  <div>
                    <label>Message</label>
                  </div>
                  <textarea
                    placeholder="Enter your message..."
                    className="resize-none mt-1 px-5 py-3   h-32 lg:h-40 w-full border border-slate-800  rounded-2xl"
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
                  `border border-slate-400 mt-5 lg:mt-10 px-4 py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`,
                  status && "bg-gray-200", // Default background when status is set
                  status &&
                    "success" in status &&
                    status.success &&
                    "bg-[#25D366] text-green-950", // Success styling
                  status &&
                    "error" in status &&
                    status.error &&
                    "bg-red-500 text-white" // Error styling
                )}
                disabled={
                  loading ||
                  (status !== null && "success" in status && status.success)
                } // Disable if loading or submission was successful
                onClick={handleSubmit}
              >
                {loading ? (
                  <>
                    <SmallLoadingSpinner />
                    Sending...
                  </>
                ) : status && "success" in status && status.success ? (
                  "Submitted Successfully"
                ) : "error" in (status || {}) ? (
                  "Submission Failed"
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUpForm;
