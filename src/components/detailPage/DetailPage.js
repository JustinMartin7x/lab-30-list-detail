import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCharacter } from '../utils/utils';

export default function DetailPage() {
  const [loading, setLoading] = useState();
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    getCharacter(id).then((item) => {
      setCharacter(item);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading</div>;
  return (
    <>
      <p>name: {character.name}</p>
      <img src={character.image} alt={character.name} />
      <p>{character.gender}</p>
    </>
  );
}
