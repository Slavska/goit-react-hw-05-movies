import { Outlet } from 'react-router-dom';
import { getTrends } from 'services/fetch';
import { useEffect, useState } from 'react';
import { ListTrend } from 'components/Home/ListTrends';

export function Home() {
  const [trends, setMovies] = useState([]);

  useEffect(() => {
    getTrends()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        <ListTrend trends={trends} />
      </ul>
      <Outlet />
    </div>
  );
}
