import type { Metadata } from "next";
// import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartat Dashboard",
  description: "Kartat Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar>{children}</Sidebar>
        {/* <Toaster position="top-right" richColors /> */}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
