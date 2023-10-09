import '../globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./layout/Header";
import { Footer } from "./layout/Footer";
import Providers from './providers'
import ThemeSwitcher from './components/ThemeSwitcher'
import Link from 'next/link';

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
    <html lang="en" >
      <body className={inter.className}>
        <Providers>
          <Header/>
  
          <main  className='py-10 px-5'>
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
