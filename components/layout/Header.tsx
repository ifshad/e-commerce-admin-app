"use client";
import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/providers/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: FC = () => {
  const router = useRouter();
  const { user, loading } = useAuthContext();
  console.log(user);

  const handleLogOut = () => {
    signOut(auth)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className="p-2 flex items-center justify-end border-x-2 border-t-2 rounded-t border-[#D9D9D9]/20 shadow-lg sticky top-0 z-30 backdrop-blur-3xl bg-[#D9D9D9] bg-opacity-[13.5%] ">
      <div className="hidden md:flex items-center gap-3">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="bg-purple-200 text-purple-500 font-semibold p-2 rounded">
                {user.email}
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button className="w-full" onClick={handleLogOut}>Logout</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
