import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarSearch, ShoppingBag } from "lucide-react";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="container grid grid-cols-3 gap-3">
      <Card className="flex justify-around items-center bg-gradient-to-r from-violet-800 to-violet-600">
        <CardHeader>
          <CardDescription className="text-white">Welcome to e-commerce</CardDescription>
          <CardTitle className="text-white font-semibold">Dhaka</CardTitle>
        </CardHeader>
        <CardHeader>
          <CardDescription className="text-white">02 July</CardDescription>
        </CardHeader>
      </Card>

      <Card className="flex justify-around items-center">
        <CardHeader className="h-16 w-16 p-1 rounded-full bg-green-200 flex items-center justify-center">
          <CalendarSearch />
        </CardHeader>
        <CardHeader>
          <CardDescription>Total Sales</CardDescription>
          <CardTitle>$10000</CardTitle>
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
          <CardTitle>32</CardTitle>
        </CardHeader>
        <CardHeader>
          <CardDescription>Today</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DashboardPage;
