import { getTrends } from 'services/fetch';
import { useEffect, useState } from 'react';
import { ListTrend } from 'components/Home/ListTrends';
import { H1 } from 'components/App/SharedStyled';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

export default function Home() {
  const [trends, setMovies] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(true);
    getTrends()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => {
        toast.error(error);
      })
      .finally(() => setStatus(false));
  }, []);

  return (
    <>
      <H1>Trending Today</H1>
      {status && <Loader />}
      <ListTrend trends={trends} />
    </>
  );
}
