import { Outlet } from 'react-router-dom';

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
      <Outlet />
    </Container>
  );
};
