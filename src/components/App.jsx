import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
// import { MovieDetails } from '../pages/MovieDetails';
import { NotFound } from '../pages/NotFound';

import { Container, Header, Logo, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img
            src="../images/logo.svg"
            alt="TMDB"
            width="100%"
            height="20"
            display="block"
          ></img>
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
