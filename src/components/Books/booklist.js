import React from 'react';

export default function BookList({ books }) {
  return (
    <section>
      {books.map(book => (
        <div key={book.id}>
          <p>{book.title}</p>
        </div>
      ))};
    </section>
  );
}