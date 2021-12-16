import React, { useEffect, useState } from 'react';
import BookList from '../../components/Books/booklist';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setData(data);
    };
    fetchData();
  }, []);
  
  return (
    <div>
      <h1>books list</h1>
      <BookList books={data}/>
    </div>
  );
}