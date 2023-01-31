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
    // src="https://m.media-amazon.com/images/I/41UGPOZqH2L._AC_SF480,480_.jpg"
    src="./images/Curious_minds.jpg"
    alt="Interesting Facts about curious minds"
  />
);

const Title = () => <h2> Interesting Facts about curious minds</h2>;

const Author = () => {
  return <h4>Jordan Moore</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
