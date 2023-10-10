import '../globals.css'
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./layout/Header";
import { Footer } from "./layout/Footer";
import Providers from './providers'
import GoogleScript from './GoogleScript';
import Head from 'next/head';
import Icon from '../icon';



const roboto = Roboto({ subsets: ["latin"],weight:['100','400','500','700'] });

export const metadata: Metadata = {
  title: "Gulf Careerist",
  description: "Your Gateway to Gulf Job Opportunities! Explore the best Gulf job websites and find thousands of career opportunities in the region. Start your journey to a fulfilling career today. United Arab Emirates, Qatar and KSA",
  openGraph:{
    title:'..',
    description:'...'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
     
        <link rel='icon' href='/favicon.ico' />

    <GoogleScript/>
      <body className={roboto.className}>
        <Providers>
          <Header/>
  
          <main  className='min-h-screen py-10 px-5'>
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
