import React, { createContext, useState, useContext } from "react";

let currentStep = 1;

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1); // Default is step 1

  return (
    <RegistrationContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  return useContext(RegistrationContext);
};
