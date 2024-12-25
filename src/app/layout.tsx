import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import { Sora } from 'next/font/google'
import { Footer } from "./components/common/Footer";
import { LayoutComponent } from "./components/common/LayoutComponent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: "AyEstate",
    template: "%s - AyEstate "
  },
  description: "Start your property journey with AyEstate today and take the first step toward finding your dream home. With our knowledge and dedication, we are here to make your real estate dreams a reality. Let us help you discover the perfect property and experience a level of service that truly sets us apart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header><LayoutComponent /></header>
        {children}
        <footer className=' bottom-0 w-screen pb-0'>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
