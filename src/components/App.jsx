import React, { Component } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { NotFound } from '../pages/NotFound';

import { Container, Header, Logo, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon"></span> GoMovies Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies/*" element={<Movies />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
