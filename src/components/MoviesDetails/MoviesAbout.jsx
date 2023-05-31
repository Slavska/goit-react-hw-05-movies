import { useState, useEffect } from 'react';
import { getDetails } from 'services/fetch';
import { Outlet, useParams, Link, useNavigate } from 'react-router-dom';
import defaultPoster from '../../img/defaultPoster.png';

const baseURL = 'https://image.tmdb.org/t/p/original';

export const MoviesAbout = () => {
  const [data, setData] = useState('');
  const { movieId } = useParams('');
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const {
    poster_path,
    original_title,
    genres,
    overview,
    vote_average,
    release_date,
  } = data;

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    setStatus(true);
    getDetails(movieId)
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setStatus(false));
  }, [movieId]);
  return (
    <>
      {data && (
        <div>
          <Link onClick={() => navigate(-1)}>Go back</Link>
          <img
            alt={original_title}
            src={poster_path ? baseURL + poster_path : defaultPoster}
            height="400"
            width="280"
          />
          <h2>
            {original_title} {release_date.slice(0, 4)}
          </h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
          <p>Additional Information</p>
          <div>
            <Link to="cast" replace>
              Cast
            </Link>
            <Link to="reviews" replace>
              Reviews
            </Link>
          </div>
        </div>
      )}
      {!status && data.length === 0 && <p>We are sorry, no results</p>}
      <Outlet />
    </>
  );
};
