"use client";
import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/utils/auth";

const Header: FC = () => {
  const token = localStorage.getItem("jwt");
  const router = useRouter();

  const handleLogout = () => {
    logoutUser(); 
    router.push("/login"); 
  };
  return (
    <div className="p-2 flex items-center justify-end border-x-2 border-t-2 rounded-t border-[#D9D9D9]/20 shadow-lg sticky top-0 z-30 backdrop-blur-lg bg-[#D9D9D9] bg-opacity-[13.5%] ">
      <div className="hidden md:flex items-center gap-3">
        {token ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button className="">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
