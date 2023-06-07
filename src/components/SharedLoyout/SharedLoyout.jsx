import { Header, LinkNav } from 'components/SharedLoyout/SharedStyled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <LinkNav to="/" replace>
            Home
          </LinkNav>
          <LinkNav to="movies" replace>
            Movies
          </LinkNav>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
