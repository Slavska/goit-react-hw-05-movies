import { Container } from 'components/SharedLoyout/SharedStyled';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/fetch';
import { toast } from 'react-toastify';
import css from './Cast.module.css';
import defaultActor from '../../img/defaultActor.png';
import { Loader } from 'components/Loader/Loader';

const baseURL = 'https://image.tmdb.org/t/p/original';

export default function Cast() {
  const { movieId } = useParams('');
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(false);
    getCredits(movieId)
      .then(({ cast }) => {
        setActors(cast);
      })
      .catch(error => {
        toast.error(error);
      })
      .finally(() => setStatus(false));
  }, [movieId]);
  return (
    <Container>
      {status && <Loader />}
      {actors.length !== 0 && (
        <ul className={css.castList}>
          {actors.map(
            ({ original_name, character, profile_path, credit_id }) => (
              <li className={css.castItem} key={credit_id}>
                <img
                  className={css.castPhoto}
                  alt={original_name}
                  src={
                    !(profile_path === null)
                      ? baseURL + profile_path
                      : defaultActor
                  }
                  height="180"
                  width="130"
                />
                <p className={css.castText}>{original_name}</p>
                <p className={css.castText}>Character: {character}</p>
              </li>
            )
          )}
        </ul>
      )}
      {!status && actors.length === 0 && <p>No results</p>}
    </Container>
  );
}
