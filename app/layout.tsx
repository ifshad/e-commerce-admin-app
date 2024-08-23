import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import NextTopLoader from "nextjs-toploader";
import Sidebar from "@/components/admin-panel/sidebar";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e-Commerce Admin App",
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
        <NextTopLoader />
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <Header />
            <div className="ml-64 mt-16 p-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
