import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import NextTopLoader from "nextjs-toploader";
import Sidebar from "@/components/admin-panel/sidebar";
import ProtectRoute from "@/utils/ProtectRoute";
import { AuthProvider } from "@/providers/AuthContext";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Panel | E-Commerce",
  description: "Manage your products professionally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProvider>
          <NextTopLoader />
          <ProtectRoute>
            <div className="flex">
              <Sidebar />
              <div className="w-full">
                <Header />
                <div className="ml-64 p-6">{children}</div>
              </div>
            </div>
          </ProtectRoute>
        </AuthProvider>
      </body>
    </html>
  );
}
