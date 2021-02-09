import React, { useState, useEffect } from 'react';
import { getList } from '../utils/utils';

import ListPage from '../ListPage/ListPage';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getList().then((items) => {
      setCharacters(items.results);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <div className="body">
      <div className="banner"> RICK AND MORTY WUBBA LUBBA DUB DUB</div>
      <ListPage characters={characters} />
    </div>
  );
}
