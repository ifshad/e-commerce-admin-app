import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import Image from "next/image";
import { FileWarningIcon } from "lucide-react";
import getOneProduct from "@/app/services/getOneProduct";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  const singleProduct = await getOneProduct(Number(productId));
  console.log(singleProduct);

  return (
    <div className="">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center">
        Product Details
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-5 relative">
        <div className="absolute -bottom-4 md:bottom-4 md:left-[600px]">
          <span className="bg-[#00FFE0] px-3 py-1 rounded-full text-gray-800">
            {singleProduct.stock}/10
          </span>
        </div>
        <div className="bg-[#D9D9D9] rounded-md p-2">
          <span className="w-full h-full flex justify-center items-center">
            <FileWarningIcon /> No Image Available
          </span>
        </div>
        <div className="grid grid-rows-4 md:pl-16 md:pt-10">
          <div className="row-span-2">
            <p className="text-white text-5xl mb-3">{singleProduct.name}</p>
            <div>
              <p className="text-white/90 text-xl mb-3 bg-cyan-600 rounded-sm w-fit px-3 py-1">
                {singleProduct.category}
              </p>
            </div>
            <p className="text-white/85 text-2xl">{singleProduct.description}</p>
          </div>
          <div className="flex gap-4 items-center row-span-1">
            <span className="font-bold text-3xl text-[#00FFE0]">${singleProduct.price}</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
