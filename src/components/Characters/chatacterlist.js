import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <section>
      {characters.map((char) => (
        <div className="characters" key={char.name}>
          <a href={char.wikiUrl}>{char.name}</a>
          <p> {char.birth} - {char.death}</p>
        </div>
      ))}
    </section>
  );
}