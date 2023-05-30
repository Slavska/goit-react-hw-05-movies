import { Link, Outlet } from 'react-router-dom';

export const SearchList = ({ searchList }) => {
  return (
    <>
      <ul>
        {searchList.map(({ id, title, backdrop_path }) => {
          return (
            <li key={id}>
              <Link to={backdrop_path}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
