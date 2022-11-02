import { Outlet, Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../pages/MovieDetails';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { getSearchFilms } from '../service/APIservice';

const Movies = ({ searchQuery, page = 1 }) => {
  const movies = getSearchFilms(searchQuery, (page = 1));

  return (
    <main>
      <h1>Movies Popular page</h1>
      <SearchBox></SearchBox>
      <MoviesList movies={movies} />
      <Outlet></Outlet>

      {/* <Routes>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes> */}
    </main>
  );
};

export default Movies;
