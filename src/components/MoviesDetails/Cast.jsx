import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/fetch';
import defaultActor from '../../img/defaultActor.png';

const baseURL = 'https://image.tmdb.org/t/p/original';

export const Cast = () => {
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
        console.log(error);
      })
      .finally(() => setStatus(false));
  }, [movieId]);
  return (
    <>
      {actors && (
        <ul>
          {actors.map(
            ({ original_name, character, profile_path, credit_id }) => (
              <li key={credit_id}>
                <img
                  alt={original_name}
                  src={
                    !(profile_path === null)
                      ? baseURL + profile_path
                      : defaultActor
                  }
                  height="300"
                  width="200"
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            )
          )}
        </ul>
      )}
      {!status && actors.length === 0 && <p>No results</p>}
    </>
  );
};
