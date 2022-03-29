/** @format */

import React from 'react';

const Login = ({ setUname }) => {
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
