"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "@phosphor-icons/react";
const PopUpForm = ({ isOpen, onClose, title }) => {
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

            className="bg-white p-6 rounded-lg shadow-lg w-xl relative"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUpForm;
