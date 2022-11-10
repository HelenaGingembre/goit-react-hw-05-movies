import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Logo, Link } from '../App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img
            src="../../images/logo.svg"
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
