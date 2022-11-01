import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../pages/MovieDetails';

export const Movies = () => {
  return (
    <main>
      <h1>Movies Popular page</h1>
      <Routes>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </main>
  );
};
