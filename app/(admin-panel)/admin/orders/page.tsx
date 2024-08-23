"use client";
import { fetchCustomers } from "@/app/services/customerService";
import { fetchOrders } from "@/app/services/orderService";
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
import React, { useEffect, useState } from "react";

interface Order {
  id: number;
  customerId: string;
  totalAmount: number;
  orderDate: number;
  status: string;
  products: [
    {
      productId: number;
      quantity: number;
      price: number;
    }
  ];
}

const AdminOrderList = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  //   console.log(products);

  useEffect(() => {
    const getOrders = async () => {
      const data = await fetchOrders();
      setOrders(data.orders);
    };

    getOrders();
  }, []);
  return (
    <div className="container">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center">
        Orders
      </h1>
      <Table>
        <TableCaption>A list of your customer&apos;s orders.</TableCaption>
        <TableHeader className="bg-purple-500 border rounded-t-md">
          <TableRow>
            <TableHead className="w-[100px] text-white">ID</TableHead>
            <TableHead className="text-white">Customer ID</TableHead>
            <TableHead className="text-white">Order Date</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-right text-white">Products</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customerId}</TableCell>
              <TableCell>{order.orderDate}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell className="text-right">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product ID</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order.products.map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>{order.productId}</TableCell>
                        <TableCell>{order.quantity}</TableCell>
                        <TableCell>{order.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableCell>
              <TableCell>
                <Button>Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminOrderList;
