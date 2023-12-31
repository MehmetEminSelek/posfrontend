

import "./globals.css";
import type { Metadata } from "next";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
