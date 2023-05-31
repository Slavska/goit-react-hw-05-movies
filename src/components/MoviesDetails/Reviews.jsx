import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/fetch';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams('');
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(true);
    getReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setStatus(false));
  }, [movieId]);
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(({ content, id, author }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!status && reviews.length === 0 && <p>No results</p>}
    </>
  );
};
