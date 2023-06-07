import { MoviesForm } from 'components/MoviesForm/MoviesForm';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies } from 'services/fetch';
import { SearchList } from 'components/SearchList/SearchList';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const [search, setSearch] = useSearchParams();
  const [searchList, setSearchList] = useState([]);
  const [status, setStatus] = useState(false);
  const input = search.get('input');

  useEffect(() => {
    if (!input) {
      return;
    }
    searchMovies(input)
      .then(({ results }) => {
        setStatus(true);
        setSearchList(results);
      })
      .catch(error => {
        toast.error(error);
      })
      .finally(() => {
        setStatus(false);
      });
  }, [input]);

  const addSubmit = input => {
    setSearch({ input: input });
  };
  return (
    <>
      <MoviesForm onHandleSubmit={addSubmit} />
      {status && <Loader />}
      {searchList.length > 0 && <SearchList searchList={searchList} />}
    </>
  );
}
