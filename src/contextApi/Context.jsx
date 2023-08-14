import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import jscookie from 'js-cookie';
import { useContext } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const userContextApi = createContext();

export const UserContextprovider = ({ children }) => {
  const usenavigate = useNavigate();
  const [email, setemail] = useState('');
  const [islogin, setislogin] = useState(false);
  const logout = () => {
    console.log('logout');
    jscookie.remove('token');
    setislogin(false);
    usenavigate('/');
  };
  useEffect(() => {
    const token = jscookie.get('token');
    if (!token) {
      usenavigate('/');
    } else {
      console.log(jwtDecode(token));
      const jwtdecodes = jwtDecode(token);
      setemail(jwtdecodes.name);
      setislogin(true);
    }
  }, []);

  return (
    <userContextApi.Provider value={{ email, islogin, setemail, logout }}>
      {children}
    </userContextApi.Provider>
  );
};

export const useUsercontext = () => {
  return useContext(userContextApi);
};
