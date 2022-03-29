/** @format */

import React, { useContext } from 'react';
import { AppContext } from '../Context/Context';

const User = () => {
  const { uname } = useContext(AppContext);
  return (
    <div>
      <h1>User : {uname}</h1>
    </div>
  );
};

export default User;
