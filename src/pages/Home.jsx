import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingFilms } from 'service/APIservice';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingFilms().then(data => {
      console.log('data.results', data.results);
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <main>
      <h1>Welcome Movies service</h1>
      <h2>Trending Movies today:</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
