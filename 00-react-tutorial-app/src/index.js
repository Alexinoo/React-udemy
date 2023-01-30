import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41UGPOZqH2L._AC_SF480,480_.jpg"
    alt="Hunt It Down, Kill It & Drag It Home"
  />
);

const Title = () => <h2> Hunt It Down, Kill It & Drag It Home</h2>;

const Author = () => {
  return <h4>David Thomas Roberts</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(root);

root.render(<BookList />);

/* same as root.render(<BookList></BookList>); */
