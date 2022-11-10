import React, { lazy } from 'react';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../pages/MovieDetails';
// import { Cast } from '../components/MovieDetails/Cast';
// import { Reviews } from '../components/MovieDetails/Reviews';
import { NotFound } from '../pages/NotFound';

import { Container } from './App.styled';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./MovieDetails/Cast'));
const Reviews = lazy(() => import('./MovieDetails/Reviews'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};
