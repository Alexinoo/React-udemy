import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX Syntax
// function Greeting() {
//   return <h2>My First Component</h2>;
// }

// createElement() function
function Greeting() {
  return React.createElement('h2', {}, 'hello world');
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(root);

root.render(<Greeting />);

/* same as root.render(<Greeting></Greeting>); */
