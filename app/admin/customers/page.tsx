"use client";
import { fetchCustomers } from "@/app/services/customerService";
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

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  orders: [];
}

const AdminCustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  //   console.log(products);

  useEffect(() => {
    const getCustomers = async () => {
      const data = await fetchCustomers();
      setCustomers(data.customers);
    };

    getCustomers();
  }, []);
  return (
    <div className="container">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center">
        Customers
      </h1>
      <Table>
        <TableCaption>A list of your customers.</TableCaption>
        <TableHeader className="bg-purple-500 border rounded-t-md">
          <TableRow>
            <TableHead className="w-[100px] text-white">ID</TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Phone Number</TableHead>
            <TableHead className="text-white">Address</TableHead>
            <TableHead className="text-right text-white">Orders</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.id}</TableCell>
              <TableCell>
                {customer.firstName} {customer.lastName}
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phoneNumber}</TableCell>
              <TableCell>
                {customer.address.street}, {customer.address.city},{" "}
                {customer.address.postalCode}, {customer.address.country}
              </TableCell>
              <TableCell className="text-right">
                <ul>
                  {customer.orders.map((order, index) => (
                    <li key={index}>{order}</li>
                  ))}
                </ul>
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

export default AdminCustomerList;
