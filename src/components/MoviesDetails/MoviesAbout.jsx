import { useState, useEffect } from 'react';
import { getDetails } from 'services/fetch';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import defaultPoster from '../../img/defaultPoster.png';
import { LinkStyled } from 'components/SharedLoyout/SharedStyled';
import css from './MovieDetails.module.css';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { FiArrowLeft } from 'react-icons/fi';

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
        toast.error(error);
      })
      .finally(() => setStatus(false));
  }, [movieId]);
  return (
    <>
      {status && <Loader />}
      {data && (
        <>
          <div className={css.movieBack}>
            <LinkStyled onClick={() => navigate(-1)}>
              <FiArrowLeft />
              Go back
            </LinkStyled>
          </div>
          <div className={css.movieWrapper}>
            <img
              className={css.moviePoster}
              alt={original_title}
              src={poster_path ? baseURL + poster_path : defaultPoster}
              height="350"
              width="240"
            />
            <div className={css.movieList}>
              <h2 className={css.movieTitle}>
                {original_title} {release_date.slice(0, 4)}
              </h2>
              <p>User score: {Math.round(vote_average * 10)}%</p>
              <h3 className={css.movieSubtitle}>Overview</h3>
              <p>{overview}</p>
              <h3 className={css.movieSubtitle}>Genres</h3>
              <p>{genres.map(genre => genre.name).join(' ')}</p>
              <h3 className={css.movieSubtitle}>Additional Information</h3>

              <div className={css.movieLink}>
                <LinkStyled to="cast" replace>
                  Cast
                </LinkStyled>
                <LinkStyled to="reviews" replace>
                  Reviews
                </LinkStyled>
              </div>
            </div>
          </div>
        </>
      )}
      <Outlet />
      {!status && data.length === 0 && <p>We are sorry, no results</p>}
    </>
  );
};
