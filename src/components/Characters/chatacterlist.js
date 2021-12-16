import React from 'react';

export default function CharacterList({ characters }) {
//   console.log(characters);
  return (
    <div>
      {characters.map((char) => (
        <div key={char.id} className="character">
          <h1>{char.name}</h1>
        </div>
      ))}
    </div>
  );
}