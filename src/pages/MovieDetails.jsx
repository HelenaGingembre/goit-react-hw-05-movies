import { Routes, Route, Outlet } from 'react-router-dom';
import { Cast } from '../components/MovieDetails/Cast';
import { Reviews } from '../components/MovieDetails/Reviews';

export const MovieDetails = () => {
  return (
    <main>
      {/* <Routes> */}
      {/* { Cast i Reviews Рендерится на странице MovieDetails.} */}
      <Outlet></Outlet>
      {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
      {/* </Routes> */}
    </main>
  );
};