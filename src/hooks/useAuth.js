import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const useAuth = () => {
  const [authState] = useContext(AuthContext);
  // console.log(authState.token);
  return { token: authState.token };
};

export default useAuth;
