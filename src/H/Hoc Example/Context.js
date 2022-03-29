/** @format */

import React, { useState } from 'react';
import Login from './Login';
import User from './User';
const Context = () => {
  const [uname, setUname] = useState('');
  return (
    <div>
      <Login setUname={setUname} />
      <User uname={uname} />
    </div>
  );
};

export default Context;
