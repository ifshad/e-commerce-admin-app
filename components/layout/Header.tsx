"use client";
import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/providers/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

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
    <div className="p-2 flex items-center justify-end border-x-2 border-t-2 rounded-t border-[#D9D9D9]/20 shadow-lg sticky top-0 z-30 backdrop-blur-lg bg-[#D9D9D9] bg-opacity-[13.5%] ">
      <div className="hidden md:flex items-center gap-3">
        {user ? (
          <Button onClick={handleLogOut}>Logout</Button>
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
