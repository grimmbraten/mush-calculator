import React, { createContext, useState } from 'react';

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState({ isAuthenticated: false });

  return (
    <AuthenticationContext.Provider value={{ authentication, setAuthentication }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider };
export default AuthenticationContext;
