"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileWarningIcon } from "lucide-react";
import { fetchProducts } from "../services/productService";

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  stock: number;
  price: number;
  imageUrl: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  //   console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      //   console.log(data)
      setProducts(data.products);
    };

    getProducts();
  }, []);
  return (
    <div>
      <div>
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center">
          Featured Products
        </h1>
        {products.length === 0 ? (
          <p className="text-center text-xl mt-5">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="grid grid-rows-7 bg-slate-100 border-2 border-transparent relative shadow shadow-white/20 hover:shadow-md hover:shadow-white/40"
              >
                {/* <div className="absolute inset-0  rounded-sm bg-gradient-to-tr from-purple-400 via-rose-400 to-yellow-400 filter blur-lg -z-50"></div> */}
                <CardHeader className="row-span-4">
                  <span className="w-full h-full flex justify-center items-center">
                    <FileWarningIcon /> No Image Available
                  </span>
                </CardHeader>
                <CardContent className="row-span-2">
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                  <CardDescription>{product.category}</CardDescription>
                  <CardDescription>Price: ${product.price}</CardDescription>
                </CardContent>
                <CardFooter className="row-span-1 flex justify-between">
                  <Button>
                    <Link href={`/products/${product.id}`}>Details</Link>
                  </Button>
                  <CardDescription>Quant: {product.stock}</CardDescription>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
