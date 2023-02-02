import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const books = [
  {
    author: 'Colleen Hover',
    title: 'IT ENDS WITH US',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg',
  },
  {
    author: 'Jay Shetty',
    title: '8 RULES OF LOVE',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71FI7MAeUcL._AC_UL600_SR600,400_.jpg',
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { author, title, img } = book;
        return <Book author={author} title={title} img={img} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { author, title, img, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title} </h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
