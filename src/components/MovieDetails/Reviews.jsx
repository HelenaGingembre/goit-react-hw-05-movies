import { getReviewsFilmById } from 'service/APIservice';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState('');

  useEffect(() => {
    getReviewsFilmById(movieId).then(movie => {
      setReviews(
        movie.results.map(itemReviews => (
          <li key={itemReviews.id}>
            <h3> Author:{itemReviews.author}</h3>
            <p>{itemReviews.content}</p>
          </li>
        ))
      );
    });
  }, [movieId]);

  return (
    <main>
      <h1> Reviews page</h1>
      <ul>
        {reviews.length !== 0 ? reviews : 'No Reviews info for this film'}
      </ul>
    </main>
  );
};

export default Reviews;
