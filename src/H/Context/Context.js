/** @format */

import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);

const Context = () => {
  const [uname, setUname] = useState('');

  return (
    <AppContext.Provider value={{ uname, setUname }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default Context;

/*
1. Create context import
2. use above main function
3. paste AppContext to div in return (Wrapping )
4. include .provider
5. write value over appcontext.provider

the page where you wwant to use the context. 
1. import useContext hooks
2. Import appcontext in other pages to use values 
3. check if const appContext has export
*/
