"use client";
import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaBagShopping,
  FaCartPlus,
  FaCircleDollarToSlot,
} from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { BiLogIn, BiLogOut, BiMenu } from "react-icons/bi";
import logo from "@/public/Images/TechDynasty logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/utils/auth";

const Header: FC = () => {
  const token = localStorage.getItem("jwt");
  const router = useRouter();

  const handleLogout = () => {
    logoutUser(); // Remove JWT and user data
    router.push("/login"); // Redirect to login page
  };
  return (
    <div className="p-2 flex items-center justify-between border-x-2 border-t-2 rounded-t border-[#D9D9D9]/20 shadow-lg sticky top-0 z-50 backdrop-blur-lg bg-[#D9D9D9] bg-opacity-[13.5%] ">
      <div>
        <Link href="/" className="flex gap-3 items-center">
          <span className="font-bold text-lg">Admin</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-3">
        <Button variant="link" className="">
          <Link href="/products">Products</Link>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link" className="outline-none">
              Admin
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#D9D9D9] border-[#D9D9D9]/20 shadow-lg p-3 rounded-sm translate-x-20 translate-y-2">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/admin/customers">Customers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/products">Products</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/products/add-product">Add Products</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:flex items-center gap-3">
        {token ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button className="">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>

      <div className="md:hidden relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>a</DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="absolute right-0 w-52 bg-[#1C2349] p-3 border rounded-sm shadow-md"
          >
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link className="flex items-center gap-3" href="/products">
                  <FaBagShopping /> Buy Now
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem></DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
