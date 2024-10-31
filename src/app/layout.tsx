import { Roboto_Condensed } from 'next/font/google';
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300','400', '500',],
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
