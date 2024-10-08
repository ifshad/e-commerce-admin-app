import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "@/providers/AuthContext";
import { OrderProvider } from "@/providers/OrderContext";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Panel | Login",
  description: "Login to manage your products",
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
          <OrderProvider>
            <NextTopLoader />
            <Header />
            <div>{children}</div>
          </OrderProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
