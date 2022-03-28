/** @format */

import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1, showText: state.showText };
    case 'toggle':
      return { count: state.count, showText: !state.showText };
    default:
      return { state };
  }
};

const RRed = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <>{state.count}</>
      <button
        onClick={() => {
          dispatch({ type: 'Increment' });
          dispatch({ type: 'toggle' });
        }}>
        Click Me
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default RRed;
