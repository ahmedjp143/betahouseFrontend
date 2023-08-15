import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import jscookie from 'js-cookie';
import { useContext } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GetQuery } from '../../queryApi/ReactApi';

const userContextApi = createContext();

export const UserContextprovider = ({ children }) => {
  const usenavigate = useNavigate();
  const [email, setemail] = useState('');
  const [islogin, setislogin] = useState(false);
  const [roleallowed, setroleallowed] = useState('');
  const logout = () => {
    console.log('logout');
    jscookie.remove('token');
    setislogin(false);
    usenavigate('/');
  };
  async function onload() {
    const token = jscookie.get('token');
    if (!token) {
      usenavigate('/');
    } else {
      console.log(jwtDecode(token));
      const jwtdecodes = jwtDecode(token);
      // console.log(jwtdecodes.id);
      setemail(jwtdecodes.name);
      setislogin(true);
      const { data } = await axios.get(
        `https://systembetahouse-jb.vercel.app/users/${jwtdecodes.id}`
      );
      // console.log(data);
      setroleallowed(data.Role);
    }
  }
  useEffect(() => {
    onload();
  }, []);
  // const { data } = GetQuery(`/users/:${jwtdecodes.id}`, 'users');
  // console.log(data);

  return (
    <userContextApi.Provider
      value={{ email, islogin, setemail, logout, roleallowed, onload }}
    >
      {children}
    </userContextApi.Provider>
  );
};

export const useUsercontext = () => {
  return useContext(userContextApi);
};
