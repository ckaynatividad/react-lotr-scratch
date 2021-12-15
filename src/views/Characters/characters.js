import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/Characters/chatacterlist';

import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setData(data);
    };
    fetchData();
  }, []);

  const handleClick = async () => {
    const data = await fetchCharacters(race, query);
    setData(data);
  };

  return (
    <div>
      <h1>characters</h1>
      <input></input>
      <select>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      <button>Search</button>
      <CharacterList characters={data} />
    </div>
  );
}