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
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log('element', e.target);
    console.log('input name', e.target.name);
    console.log('input value', e.target.value);
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    console.log('form submitted');
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: '1rem 0' }}
          onChange={handleFormInput}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { author, title, img } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title} </h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
