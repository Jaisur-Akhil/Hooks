/** @format */

import React, { useLayoutEffect, useEffect, useRef } from 'react';

const Layout = () => {
  const inpRef = useRef(null);

  useEffect(() => {
    inpRef.current.value = 'Full Stack Programmer';
    console.log('Full Stack Programmer');
  }, []);

  useLayoutEffect(() => {
    console.log(inpRef.current.value);
  }, []);

  return (
    <div>
      <input
        ref={inpRef}
        value='Programmer'
        readOnly
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
};

export default Layout;

//layout iffect is fundamentally called earlier in the rendering phasethen use effect .
//useeffect is called after every thing is loaded in page. opposite to uselayout
