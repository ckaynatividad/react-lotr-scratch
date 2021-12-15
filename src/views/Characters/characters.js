import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/Characters/chatacterlist';
import Controls from '../../components/Characters/controls';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setData(data);
    };
    fetchData();
  }, [race]);

  const handleClick = async () => {
    const data = await fetchCharacters(race, query);
    setData(data);
  };

  return (
    <div>
      <h1>chatacyers</h1>
      <Controls {...{ query, setQuery, handleClick, race, setRace }} />
      <CharacterList characters={data} />
    </div>
  );
}