/** @format */

import React, { useReducer } from 'react';

//reducer function to manage all the states.
const reducer = (state, action) => {
  //value of states , action which can be performed with state
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case 'toggle':
      return {
        count: state.count,
        showText: !state.showText,
      };
    default:
      return {
        state,
      };
  }
};

const Red = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'toggle' });
        }}>
        Click Me
      </button>

      {state.showText && <p>This is a text</p>}
    </>
  );
};

export default Red;
