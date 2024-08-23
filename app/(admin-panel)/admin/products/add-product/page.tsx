"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
const axios = require("axios").default;

const SellerPage = () => {

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
    const name: any = form.get("name");
    const imageUrl: any = form.get("imageUrl");
    const category: any = form.get("category");
    const price: any = form.get("price");
    const description: any = form.get("description");
    const stock: any = form.get("stock");

    const productInfo: object = {
      name,
      imageUrl,
      category,
      price,
      description,
      stock,
    };

    e.target.reset();
    Toast.fire({
      icon: "success",
      title: "Product added successfully",
    });
  }
  return (
    <div className="container w-full flex flex-col items-center">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2">
        Add your product!
      </h1>
      {/* Registration Form */}
      <div className="bg-white rounded-xl px-6 py-8 border w-11/12 md:w-4/6 m-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
          <div className="relative">
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="imageUrl"
              required
            />
            <label
              htmlFor="imageUrl"
              className="absolute left-3 -top-3 cursor-text  bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0  transition-all duration-200"
            >
              Image URL
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="name"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-3 -top-3 cursor-text  bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0  transition-all duration-200"
            >
              Product Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="category"
              id="category"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="category"
              required
            />
            <label
              htmlFor="category"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Category
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="description"
              id="description"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="description"
              required
            />
            <label
              htmlFor="description"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Short Description
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              name="price"
              id="price"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="price"
              required
            />
            <label
              htmlFor="price"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Price
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              name="stock"
              id="stock"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="stock"
              required
            />
            <label
              htmlFor="stock"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Stock
            </label>
          </div>
          <Button className="w-full">
            {/* {loading ? "Claiming..." : "Claim your spot now!"} */}
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SellerPage;
