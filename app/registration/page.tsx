"use client";

import React from "react";
import { useState } from "react";

import Registration1 from "../components/registerationPage/registration1";
import Registration2 from "../components/registerationPage/registration2";
import Registration3 from "../components/registerationPage/registration3";
import Registration4 from "../components/registerationPage/registration4";

import topbanner from "../components/topbanner/topbanner";

const page = () => {
  const [registrationPage, setRegistrationPage] = useState(0);

  let context = null;

  if (registrationPage === 0) {
    context = <Registration1 setRegistrationPage={setRegistrationPage} />;
  } else if (registrationPage === 1) {
    context = <Registration2 setRegistrationPage={setRegistrationPage} />;
  } else if (registrationPage === 2) {
    context = <Registration3 setRegistrationPage={setRegistrationPage} />;
  } else if (registrationPage === 3) {
    context = <Registration4 setRegistrationPage={setRegistrationPage} />;
  }

  debugger;
  return (
    <main>
      <div>{context}</div>
    </main>
  );
};

export default page;
