import "../globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./layout/Header";
import { Footer } from "./layout/Footer";
import Providers from "./providers";
import GoogleScript from "./GoogleScript";
import Head from "next/head";
import Icon from "../icon";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gulfcareerist.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Gulf Careerist",
  description:
    "Your Gateway to Gulf Job Opportunities! Explore the best Gulf job websites and find thousands of career opportunities in the region. Start your journey to a fulfilling career today. United Arab Emirates, Qatar and KSA",
  openGraph: {
    title: "Gulf Careerist",
    description: "Jobs Search Engine",
    url: "https://gulfcareerist.com",
    siteName: "Gulf Careerist",
    images: [
      {
        url: "https://gulfcareerist.com/img/og.png",
        width: 300,
        height: 50,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleScript />
      <body className={roboto.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
