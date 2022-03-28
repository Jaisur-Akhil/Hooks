/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Effect = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
        console.log('Api Was called');
      });

    return () => {};
}, []);
// }, [count]);
    
  return (
    <div>
      Data {data}
      <>{count}</>
      <>
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          {' '}
          ClickMe
        </button>
      </>
    </div>
  );
};

export default Effect;
