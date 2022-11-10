import { getCreditsFilmById } from 'service/APIservice';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState('');

  useEffect(() => {
    getCreditsFilmById(movieId).then(movie => {
      setCast(
        movie.cast.map(itemCast => (
          <li key={itemCast.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${itemCast.profile_path}`}
              alt={`Actor - ${itemCast.name}`}
              onError={e => {
                e.target.src =
                  'https://via.placeholder.com/96x80?text=NO+PHOTO!';
              }}
              width="15%"
            />
            <p>{itemCast.name}</p>
            <p>Character:{itemCast.character}</p>
          </li>
        ))
      );
      // setCastLength(movie.cast.length);
    });
  }, [movieId]);

  return (
    <main>
      <h2>Cast:</h2>
      <ul>{cast.length !== 0 ? cast : 'No cast info for this film'}</ul>
    </main>
  );
};
