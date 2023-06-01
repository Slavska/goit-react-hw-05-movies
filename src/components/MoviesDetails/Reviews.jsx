import { Container } from 'components/App/SharedStyled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/fetch';
import { toast } from 'react-toastify';
import css from './MovieDetails.module.css';
import { Loader } from 'components/Loader/Loader';

export default function Reviews() {
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
        toast.error(error);
      })
      .finally(() => setStatus(false));
  }, [movieId]);
  return (
    <Container>
      {status && <Loader />}
      {reviews && (
        <ul className={css.reviewsList}>
          {reviews.map(({ content, id, author }) => (
            <li className={css.reviewsItem} key={id}>
              <h3 className={css.reviewsTitle}>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!status && reviews.length === 0 && <p>No results</p>}
    </Container>
  );
}
