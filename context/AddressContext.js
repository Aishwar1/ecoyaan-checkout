"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("addresses");
    if (data) setAddresses(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  return (
    <AddressContext.Provider value={{ addresses, setAddresses }}>
      {children}
    </AddressContext.Provider>
  );
}

export const useAddress = () => useContext(AddressContext);