import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import { getFilmById } from '../service/APIservice';
// import { BackLink } from '../components/BackLink/BackLink';
import { MovieInfo } from '../components/MovieDetails/MovieInfo';

const BackLink = lazy(() => import('../components/BackLink/BackLink'));

const MovieDetails = () => {
  const { movieId } = useParams();

  // const movie = getFilmById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [dataMovie, setDataMovie] = useState({});
  const [imageMovie, setImageMovie] = useState('');
  const [arrayGenres, setArrayGenres] = useState('');
  const [release, setRelease] = useState('');

  useEffect(() => {
    getFilmById(movieId).then(movie => {
      console.log('data  id', movieId);
      console.log('data movie id', movie);
      setDataMovie(movie);
      setImageMovie(`https://image.tmdb.org/t/p/w300${movie.poster_path}`);
      setArrayGenres(
        movie.genres.map(item => arrayGenres + `${item.name}`).join(', ')
      );
      setRelease(movie.release_date.slice(0, 7));
    });
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <MovieInfo
        dataMovie={dataMovie}
        imageMovie={imageMovie}
        arrayGenres={arrayGenres}
        release={release}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <h3>Additional info:</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </Suspense>
    </main>
  );
};

export default MovieDetails;
