import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className="book">
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

root.render(<BookList />);
