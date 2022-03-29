/** @format */

import React, { useContext } from 'react';
import { AppContext } from './Context';
const Login = () => {
  const { setUname } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setUname(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
