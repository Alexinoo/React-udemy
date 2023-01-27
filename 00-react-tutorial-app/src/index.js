import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return <h2>My First Component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(root);

root.render(<Greeting />);

/* same as root.render(<Greeting></Greeting>); */
