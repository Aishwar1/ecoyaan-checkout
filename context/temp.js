"use client";

import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {

  const [address, setAddress] = useState({});

  return (
    <CheckoutContext.Provider value={{ address, setAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
}
