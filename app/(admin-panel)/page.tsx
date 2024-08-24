"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useOrderContext } from "@/providers/OrderContext";
import { CalendarSearch, ShoppingBag } from "lucide-react";
import React from "react";

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const DashboardPage = () => {
  const { totalOrders, totalSales } = useOrderContext();
  const date = new Date()
  const day = date.getDate()
  const monthName = month[date.getMonth()]
  // console.log(data)
  return (
    <div className="container grid grid-cols-3 gap-3">
      <Card className="flex justify-around items-center bg-gradient-to-r from-violet-800 to-violet-600">
        <CardHeader>
          <CardDescription className="text-white">
            Welcome to e-commerce
          </CardDescription>
          <CardTitle className="text-white font-semibold">Dhaka</CardTitle>
        </CardHeader>
        <CardHeader>
          <CardDescription className="text-white">{day} {monthName}</CardDescription>
        </CardHeader>
      </Card>

      <Card className="flex justify-around items-center">
        <CardHeader className="h-16 w-16 p-1 rounded-full bg-green-200 flex items-center justify-center">
          <CalendarSearch />
        </CardHeader>
        <CardHeader>
          <CardDescription>Total Sales</CardDescription>
          <CardTitle>${totalSales}</CardTitle>
        </CardHeader>
        <CardHeader>
          <CardDescription>Today</CardDescription>
        </CardHeader>
      </Card>

      <Card className="flex justify-around items-center">
        <CardHeader className="h-16 w-16 p-1 rounded-full bg-purple-200 flex items-center justify-center">
          <ShoppingBag />
        </CardHeader>
        <CardHeader>
          <CardDescription>Total Orders</CardDescription>
          <CardTitle>{totalOrders}</CardTitle>
        </CardHeader>
        <CardHeader>
          <CardDescription>Today</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DashboardPage;
