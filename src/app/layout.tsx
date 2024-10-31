import { Roboto_Condensed } from 'next/font/google';
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300','400', '500',],
});

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

export const metadata: Metadata = {
  title: "Naira Pulse",
  description: "Live Naira exchange rates",
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
