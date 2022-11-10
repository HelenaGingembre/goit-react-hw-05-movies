import { getReviewsFilmById } from 'service/APIservice';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviewsHtml, setReviewsHtml] = useState('');
  const [reviewsLength, setReviewsLength] = useState(0);

  useEffect(() => {
    getReviewsFilmById(movieId).then(movie => {
      setReviewsHtml(
        movie.results.map(itemReviews => (
          <li key={itemReviews.id}>
            <h3> Author:{itemReviews.author}</h3>
            <p>{itemReviews.content}</p>
          </li>
        ))
      );
      setReviewsLength(movie.results.length);
    });
  }, [movieId]);

  return (
    <main>
      <h1> Reviews page</h1>
      <ul>
        {reviewsLength !== 0 ? reviewsHtml : 'No Reviews info for this film'}
      </ul>
    </main>
  );
};
