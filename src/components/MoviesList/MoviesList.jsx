// import { Container } from 'components/App.styled';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, MovieItem, MovieTitle } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <MovieTitle>{movie.title}</MovieTitle>
          </Link>
        </MovieItem>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
