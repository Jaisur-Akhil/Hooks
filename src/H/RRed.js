/** @format */

import React from 'react';

let reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1, showText };
    case 'toggle':
      return { count, showText: !state.showText };
    default:
      return { state };
  }
};

const RRed = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText });

  return (
    <div>
      <>{state.count}</>
      {!state.showText}
    </div>
  );
};

export default RRed;
