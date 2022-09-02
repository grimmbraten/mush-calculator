import { useContext } from 'react';
import AuthenticationContext from '~contexts/authentication';

export const useAuth = () => {
  const context = useContext(AuthenticationContext);
  if (!context) throw new Error('authentication context not provided');
  return context;
};
