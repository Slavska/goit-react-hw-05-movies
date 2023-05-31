import { MoviesForm } from 'components/Movie/MoviesForm';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies } from 'services/fetch';
import { SearchList } from 'components/Movie/SearchList';

export const Movies = () => {
  const [search, setSearch] = useSearchParams();
  const [searchList, setSearchList] = useState([]);
  const input = search.get('input');

  useEffect(() => {
    if (!input) {
      return;
    }
    searchMovies(input)
      .then(({ results }) => {
        setSearchList(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [input]);

  const addSubmit = input => {
    setSearch({ input: input });
  };
  return (
    <>
      <MoviesForm onHandleSubmit={addSubmit} />
      {searchList && <SearchList searchList={searchList} />}
      <Outlet />
    </>
  );
};
