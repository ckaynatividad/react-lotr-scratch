import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/Characters/chatacterlist';
import Controls from '../../components/Characters/controls';

import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setCharacters(data);
    };
    fetchData();
  }, [race]);

  const handleClick = async () => {
    const data = await fetchCharacters(race, query);
    setCharacters(data);
  };

  return (
    <div className="character-list">
      <Controls
        query={query}
        setQuery={setQuery}
        race={race}
        setRace={setRace}
        handleClick={handleClick}
      />
      <CharacterList characters={characters} />
    </div>
  );
}