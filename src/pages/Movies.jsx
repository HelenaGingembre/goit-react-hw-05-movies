import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../pages/MovieDetails';
import { SearchBox } from '../components/SearchBox/SearchBox';

export const Movies = () => {
  return (
    <main>
      <h1>Movies Popular page</h1>
      <SearchBox></SearchBox>
      <Routes>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </main>
  );
};
