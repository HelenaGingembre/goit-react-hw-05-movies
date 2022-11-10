import { Container, CardBox, ImageBox, Title } from './MovieInfo.styled';
import PropTypes from 'prop-types';

export const MovieInfo = ({ dataMovie, imageMovie, arrayGenres, release }) => {
  return (
    <Container>
      <ImageBox src={imageMovie} alt={`${dataMovie.original_title}`} />
      <CardBox>
        <Title>{`${dataMovie.original_title} / ${release} `}</Title>
        <p>{`User score: ${(dataMovie.vote_average * 10).toFixed(2)}%`}</p>
        <h3>Overview</h3>
        <p>{`${dataMovie.overview}`}</p>
        <h3>Genres</h3>
        <p>{arrayGenres}</p>
      </CardBox>
    </Container>
  );
};

MovieInfo.propTypes = {
  dataMovie: PropTypes.object,
  imageMovie: PropTypes.string,
  arrayGenres: PropTypes.string,
  release: PropTypes.string,
};
