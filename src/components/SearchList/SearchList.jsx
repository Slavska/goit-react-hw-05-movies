import {
  Container,
  LinkStyled,
  Ul,
  Li,
} from 'components/SharedLoyout/SharedStyled';
import defaultPoster from '../../img/defaultPoster.png';
import PropTypes from 'prop-types';

const baseURL = 'https://image.tmdb.org/t/p/original';

export const SearchList = ({ searchList }) => {
  return (
    <Container>
      <Ul>
        {searchList.map(({ id, title, poster_path }) => {
          return (
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
          );
        })}
      </Ul>
    </Container>
  );
};
SearchList.propTypes = {
  searchList: PropTypes.array.isRequired,
};
