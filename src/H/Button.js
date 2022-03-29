/** @format */

import React, { useState, useImperativeHandle, forwardRef } from 'react';

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button>Button From Child</button>
      <br />
      {toggle && <span>Toggle</span>}
    </div>
  );
});

export default Button;
