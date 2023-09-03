"use client"; //??

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { useState } from "react";

import Profile from "./components/mainPage/profile";
import Topbanner from "./components/mainPage/topbanner";
import Midbanner from "./components/mainPage/midbanner";
import VideoBanner from "./components/mainPage/videobanner";
import Bottombanner from "./components/mainPage/bottombanner";
import Comments from "./components/mainPage/comments";
import Footer from "./components/mainPage/footer";
import Registration1 from "./components/registerationPage/registration1";
import Registration2 from "./components/registerationPage/registration2";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showRegistration, setShowRegistration] = useState<number>(0);

  const [registrationPage, setRegistrationPage] = useState(0);
  let content: React.ReactNode;
  if (registrationPage === 0) {
    content = <Midbanner />;
  } else if (registrationPage === 1) {
    content = <Registration1 />;
  } else if (registrationPage === 2) {
    content = <Registration2 />;
  } else {
    content = <Midbanner />;
  }
  return (
    <html lang="en">
      <body>
        <Profile setRegistrationPage={setRegistrationPage} />
        <Topbanner />
        <div key={registrationPage}>{content}</div>
        <VideoBanner />
        <Bottombanner />
        <Comments />
        <Footer />
        {children}
      </body>
    </html>
  );
}
