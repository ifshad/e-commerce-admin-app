"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Swal from "sweetalert2";
const axios = require("axios").default;

const AddCustomer = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const firstName: any = form.get("firstName");
    const lastName: any = form.get("lastName");
    const email: any = form.get("email");
    const phoneNumber: any = form.get("phoneNumber");
    const address: any = form.get("address");
    const orders: any = form.get("orders");

    e.target.reset();
    Toast.fire({
      icon: "success",
      title: "Product added successfully",
    });
  }
  return (
    <div className="container w-full flex flex-col items-center">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2">
        Add Customer!
      </h1>
      {/* Registration Form */}
      <div className="bg-white rounded-xl px-6 py-8 border w-11/12 md:w-4/6 m-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="firstName"
              required
            />
            <label
              htmlFor="firstName"
              className="absolute left-3 -top-3 cursor-text  bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0  transition-all duration-200"
            >
              First Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="lastName"
              required
            />
            <label
              htmlFor="lastName"
              className="absolute left-3 -top-3 cursor-text  bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0  transition-all duration-200"
            >
              Last Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="phoneNumber"
              required
            />
            <label
              htmlFor="phoneNumber"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Phone Number
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="address"
              id="address"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="address"
              required
            />
            <label
              htmlFor="address"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Address
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="orders"
              id="orders"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="orders"
              required
            />
            <label
              htmlFor="orders"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Orders
            </label>
          </div>
          <Button className="w-full">
            {/* {loading ? "Claiming..." : "Claim your spot now!"} */}
            Add Customer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
