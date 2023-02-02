import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { books } from './books'; //named exports
import Book from './Book'; //default export

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
