import { useState } from 'react';

const UseStateBasics = () => {
  //////////////////////
  // What is useState()..?
  // console.log(useState()); [undefined, ƒ];

  // Accessing individual elements since we are getting array
  // const value = useState('hello')[0];
  // const handler = useState('hello')[1];
  // console.log(value);
  // console.log(handler);

  // Why Array destructuring is so important - one liner
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // invoke setCount()
    // Technically , we can pass anything
    // If we pass a string of Bob , we will get a string of Bob
    // Something to be aware of but in our case we will increase the count
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
