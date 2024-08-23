// ProtectRoute.tsx
import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";

interface ProtectRouteProps {
  children: ReactNode;
}

const ProtectRoute = ({ children }: ProtectRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return children;
};

export default ProtectRoute;
