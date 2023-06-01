import { toast } from 'react-toastify';
import { useState } from 'react';
import { Container } from 'components/App/SharedStyled';
import css from './Movie.module.css';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

export const MoviesForm = ({ onHandleSubmit }) => {
  const [input, setInput] = useState('');

  const onChange = e => {
    setInput(e.target.value.toLowerCase());
  };

  const onSubmit = e => {
    e.preventDefault();
    if (input.trim() === '' || input.trim() === setInput.input) {
      toast.warning('You did not change the field, try again.');
      return;
    }
    onHandleSubmit(input);
    setInput('');
  };

  return (
    <Container>
      <form className={css.moviesForm} onSubmit={onSubmit}>
        <input
          className={css.moviesInput}
          name="input"
          value={input}
          onChange={onChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button className={css.moviesButton} type="submit">
          <FiSearch />
        </button>
      </form>
    </Container>
  );
};
MoviesForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
