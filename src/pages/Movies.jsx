import { MoviesForm } from 'components/MoviesForm';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies } from 'services/fetch';
import { SearchList } from 'components/SearchList';

export const Movies = () => {
  const [input, setInput] = useState('');
  const [searchList, setSearchList] = useState([]);

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

  const addSubmit = newInput => {
    setInput(newInput);
  };
  console.log(searchList);
  return (
    <>
      <MoviesForm onHandleSubmit={addSubmit} />
      {searchList && <SearchList searchList={searchList} />}
      <Outlet />
    </>
  );
};
