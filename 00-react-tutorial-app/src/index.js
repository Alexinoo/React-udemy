import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { books } from './books'; //named exports
import Book from './Book'; //default export

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
