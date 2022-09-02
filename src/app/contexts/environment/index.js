import React, { createContext } from 'react';
import { getRuntimeConfig } from '~config';

const EnvironmentContext = createContext();

const EnvironmentProvider = ({ children }) => {
  const config = getRuntimeConfig();

  return (
    <EnvironmentContext.Provider value={{ ...config }}>{children}</EnvironmentContext.Provider>
  );
};

export { EnvironmentProvider };
export default EnvironmentContext;
