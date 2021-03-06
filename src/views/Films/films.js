import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';
import FilmsList from '../../components/Films/filmlist';


export default function Films() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>hi films</h1>
      <FilmsList films={data}/>
    </div>
  );
}