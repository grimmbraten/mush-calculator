import React from 'react';
import { AuthenticationProvider } from './authentication';
import { EnvironmentProvider } from './environment';

const AppContextProvider = ({ children }) => (
  <EnvironmentProvider>
    <AuthenticationProvider>{children}</AuthenticationProvider>
  </EnvironmentProvider>
);

export default AppContextProvider;
