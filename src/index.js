import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Book from './Book';
import banana from './books';

// const names = ['Anku', 'Manku', 'Panku'];
// const newNames = names.map((veggie) => {
//   console.log(veggie);
//   return <h4>{veggie}</h4>;
// });
// console.log(newNames);

const BookList = () => {
  return (
    <>
      <h1 className="title">Amazon Best Seller</h1>
      <section className="booklist">
        {banana.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

// Event Handler

// const EvevntExamples = () => {
//   //   const handleFormInput = (ankitha) => {
//   //     console.log(ankitha.target);
//   //     console.log('Handle form input');
//   //   };
//   //   const handleButtonClick = () => {
//   //     alert('Handle button on click');
//   //   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log('Form SUbmitted');
//   };

//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={() => console.log('Handle form input')}
//           style={{ margin: '1rem 0' }}
//         />
//       </form>
//       <button onClick={() => alert('Handle button on click')}>Click me</button>
//     </section>
//   );
// };

/*
// Method 1 for using props
function Book(props) {
  return (
    <article className="book">
      <img src={props.img} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
}
*/
/*
// Method 2 for using props
function Book(props) {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}
*/

// Method 3 for using props
/*
function Book({ book: { img, title, author, getBook, id } }) {
  return (
    <article className="book">
      <img src={img} />
      <h2>{title}</h2>
      <button onClick={getBook(id)}>Display Title</button>
      <h4>{author}</h4>
      {/* {children} }
    </article>
  );
} 
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
