import { LinkStyled, Li, Ul } from 'components/App/SharedStyled';
import defaultPoster from '../../img/defaultPoster.png';
import PropTypes from 'prop-types';

const baseURL = 'https://image.tmdb.org/t/p/original';

export function ListTrend({ trends }) {
  return (
    <Ul>
      {trends.map(({ title, id, poster_path }) => (
        <Li key={id}>
          <LinkStyled to={`/movies/${id}`}>
            <img
              alt={title}
              src={poster_path ? baseURL + poster_path : defaultPoster}
              height="300"
              width="220"
            />
            <span>{title}</span>
          </LinkStyled>
        </Li>
      ))}
    </Ul>
  );
}

ListTrend.propTypes = {
  trends: PropTypes.array.isRequired,
};
