"use client";

import { useAuthContext } from "@/providers/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface ProtectRouteProps {
  children: ReactNode;
}

const ProtectRoute = ({ children }: ProtectRouteProps) => {
  const router = useRouter();
  const { user, loading } = useAuthContext();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return user ? children : null;
};

export default ProtectRoute;
