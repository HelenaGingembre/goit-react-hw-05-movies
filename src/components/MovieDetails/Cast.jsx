import { getCreditsFilmById } from 'service/APIservice';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Cast = () => {
  const { movieId } = useParams();

  const [castHtml, setCastHtml] = useState('');
  const [castLength, setCastLength] = useState(0);

  useEffect(() => {
    getCreditsFilmById(movieId).then(movie => {
      setCastHtml(
        movie.cast.map(itemCast => (
          <li key={itemCast.cast_id}>
            <img></img>
            <p>{itemCast.name}</p>
            <p>Character:{itemCast.character}</p>
          </li>
        ))
      );
      setCastLength(movie.cast.length);
    });
  }, [movieId]);

  return (
    <main>
      <h2>Cast:</h2>
      <ul>{castLength !== 0 ? castHtml : 'No cast info for this film'}</ul>
    </main>
  );
};
