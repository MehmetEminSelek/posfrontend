"use client"; //??

import "./globals.css";
import type { Metadata } from "next";
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
import Registration3 from "./components/registerationPage/registration3";
import Registration4 from "./components/registerationPage/registration4";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [registrationPage, setRegistrationPage] = useState(0);

  let content: React.ReactNode;

  if (registrationPage === 0) {
    content = <Midbanner />;
  } else if (registrationPage === 1) {
    content = <Registration1 setRegistrationPage={setRegistrationPage} />;
  } else if (registrationPage === 2) {
    content = <Registration2 setRegistrationPage={setRegistrationPage} />;
  } else if (registrationPage === 3) {
    content = <Registration3 setRegistrationPage={setRegistrationPage} />;
  } else if (registrationPage === 4) {
    content = <Registration4 setRegistrationPage={setRegistrationPage} />;
  } else {
    content = <Midbanner />;
  }
  return (
    <html lang="en">
      <body>
        <div></div>
        <Profile setRegistrationPage={setRegistrationPage} />
        <Topbanner />
        {content}
        <VideoBanner />
        <Bottombanner />
        <Comments />
        <Footer />
        {children}
      </body>
    </html>
  );
}
