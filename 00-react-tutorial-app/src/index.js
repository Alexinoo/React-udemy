import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX Syntax
// function Greeting() {
//   return <h2>My First Component</h2>;
// }

// createElement() function
// function Greeting() {
//   return React.createElement('h2', {}, 'hello there');
// }

// JSX RULE  - 1) Return one parent element
// function Greeting() {
//   return (
//     <div>
//       <h3>hello people</h3>
//       <ul>
//         <li>
//           <a href="#">Home</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// JSX RULE  - 2) Use <React.Fragment></React.Fragment>
// function Greeting() {
//   return (
//     <React.Fragment>
//       <h3>hello people</h3>
//       <ul>
//         <li>
//           <a href="#">Home</a>
//         </li>
//       </ul>
//     </React.Fragment>
//   );
// }

// JSX RULE  - 3) Use <></>
// function Greeting() {
//   return (
//     <>
//       <h3>hello people</h3>
//       <ul>
//         <li>
//           <a href="#">Home</a>
//         </li>
//       </ul>
//     </>
//   );
// }

// JSX RULE  - 4) Use className instead of class
// function Greeting() {
//   return (
//     <>
//       <h3 className="heading">hello people</h3>
//       <ul>
//         <li>
//           <a href="#">Home</a>
//         </li>
//       </ul>
//     </>
//   );
// }

// JSX RULE  - 5) Use camelCase for HTML element attributes
// e.g. onClick , htmlFor , tabIndex, readOnly
// function Greeting() {
//   return (
//     <>
//       <h3 className="heading">hello people</h3>
//       <ul>
//         <li>
//           <a href="#">Home</a>
//         </li>
//       </ul>
//       <button type="button" onClick={''}>
//         click me
//       </button>
//     </>
//   );
// }

// JSX RULE  - 6) Use return ()
/*  Not a must but make sure that if you
    are not using () then the opening tags be within
    the same line with return keyword
*/
function Greeting() {
  return (
    <>
      <h3 className="heading">hello people</h3>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
      <button type="button" onClick={''}>
        click me
      </button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(root);

root.render(<Greeting />);

/* same as root.render(<Greeting></Greeting>); */
