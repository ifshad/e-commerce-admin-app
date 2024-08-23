"use client";
import { fetchProducts } from "@/app/services/productService";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  stock: number;
  price: number;
}

const AdminProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  //   console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      // console.log(data)
      setProducts(data.products);
    };

    getProducts();
  }, []);
  return (
    <div className="container">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center">
        Product List
      </h1>
      <Table>
        <TableCaption>A list of your products available.</TableCaption>
        <TableHeader className="bg-purple-500 border rounded-t-md">
          <TableRow>
            <TableHead className="w-[100px] text-white">ID</TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Description</TableHead>
            <TableHead className="text-white">Category</TableHead>
            <TableHead className="text-white">Stock</TableHead>
            <TableHead className="text-right text-white">Price</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
              <TableCell>
                <Button>
                  <Link href={`/admin/products/${product.id}`}>Details</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminProductList;
