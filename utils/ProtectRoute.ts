"use client"

import { useAuthContext } from "@/providers/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface ProtectRouteProps {
  children: ReactNode;
}

const ProtectRoute = ({ children }: ProtectRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    const { user, loading } = useAuthContext();
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  return children;
};

export default ProtectRoute;
