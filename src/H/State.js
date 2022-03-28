/** @format */

import React from 'react';
import { useState } from 'react';
const State = () => {
  const [counter, setCounter] = useState(0);

  const [input, setInput] = useState('');
  let Increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  }; //here we are incrementating , But the state is not saved and due to which the value is not renderd

  let Change = (event) => {
    let newChange = event.target.value;
    setInput(newChange);
  };
  return (
    <>
      <div>{counter}</div>
      <button onClick={Increment}>Increment</button>
      <br />
      <input placeholder='do epic shit' onChange={Change} />
      <div>{input} </div>
    </>
  );
};

export default State;
