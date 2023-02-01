import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const author = 'Jordan Moore';
const title = 'Interesting Facts about curious minds';
const img = './images/Curious_minds.jpg';

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title} </h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
