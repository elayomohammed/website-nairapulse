import React from 'react';
import { Roboto_Condensed } from 'next/font/google';
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500',],
});

export const metadata: Metadata = {
  title: "Naira Pulse | Real-Time Naira Exchange Rates in Abuja, Lagos, Kano, Porthacourt",
  description: "Naira Pulse offers live Naira exchange rates, detailed currency charts, and an instant currency converter for Nigeria. Stay informed with real-time market analytics and insights in Abuja, Lagos, Kano, Porthacour, and beyond",
  icons: '/favicon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto_condensed.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
