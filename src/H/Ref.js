/** @format */

import React, { useRef, useState } from 'react';

const Ref = () => {
  const [inp, setInp] = useState('');

  const handlechange = (event) => {
    let a = event.target.value;
    setInp(a);
  };

  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
    inputRef.current.value = '';
  };
  return (
    <div>
      <h1>{inp}</h1>

      <input
        placeholder='Do Epic Shit'
        type='text'
        onChange={handlechange}
        ref={inputRef}
      />
      <button onClick={onClick}>Change Story</button>
    </div>
  );
};

export default Ref;
