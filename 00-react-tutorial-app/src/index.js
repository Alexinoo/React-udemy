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
const author = 'Jordan Moore';

const Book = () => {
  const title = 'Interesting Facts about curious minds';
  return (
    <article className="book">
      <img
        src="./images/Curious_minds.jpg"
        alt="Interesting Facts about curious minds"
      />
      <h2>{title} </h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
