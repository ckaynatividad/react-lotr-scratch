import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <section>
      {characters.map(char => (
        <div key={char.id}>
          <p>{char.name}</p>
        </div>
      ))};
    </section>
  );
}