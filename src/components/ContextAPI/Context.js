import React, { createContext, useState } from "react";

export const ContextApi = createContext();
const Context = ({ children }) => {
  const [value, setValue] = useState("Ethereum Rinkeby");
  const values = {
    value,
    setValue,
  };
  return <ContextApi.Provider value={values}>{children}</ContextApi.Provider>;
};

export default Context;
