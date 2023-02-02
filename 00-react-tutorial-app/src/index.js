import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const books = [
  {
    author: 'Colleen Hover',
    title: 'IT ENDS WITH US',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'Jay Shetty',
    title: '8 RULES OF LOVE',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71FI7MAeUcL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
];

const BookList = () => {
  const someValue = 'shakeAndBake';

  const displayValue = () => {
    console.log(someValue);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { author, title, img, displayValue } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title} </h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
