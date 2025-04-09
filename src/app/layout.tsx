import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jessica Tidd",
  description: "Jessica Tidd's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
