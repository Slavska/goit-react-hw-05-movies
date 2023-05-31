import { Link, useLocation } from 'react-router-dom';

export const SearchList = ({ searchList }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {searchList.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
