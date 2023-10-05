import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gulf Careerist",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen justify-center   px-4  py-8    "  >{children}</main>

        <Footer />
      </body>
    </html>
  );
}
