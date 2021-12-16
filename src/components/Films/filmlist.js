import React from 'react';

export default function FilmsList({ films }) {
  return (
    <section>
      {films.map(film => (
        <div key={film.id}>
          <p>{film.title}</p>
        </div>
      ))};
    </section>
  );
}