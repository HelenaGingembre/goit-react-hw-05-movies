import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Logo, Link } from '../App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB"
            width="100%"
            height="20"
            display="block"
          ></img>
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
