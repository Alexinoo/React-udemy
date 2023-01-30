import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <div>
      <Person></Person>
      <Message></Message>
    </div>
  );
}

// implicit return
const Person = () => <h2>john doe</h2>;

// Explicit return
const Message = () => {
  return <p>this is my message</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(root);

root.render(<Greeting />);

/* same as root.render(<Greeting></Greeting>); */
