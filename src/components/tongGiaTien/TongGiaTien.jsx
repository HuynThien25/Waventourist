import React, { createContext, useState, useContext } from 'react';

const TotalAmountContext = createContext();

export const TotalAmountProvider = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  
  return (
    <TotalAmountContext.Provider value={{ totalAmount, setTotalAmount }}>
      {children}
    </TotalAmountContext.Provider>
  );
};

export const useTotalAmount = () => useContext(TotalAmountContext);
