import { toast } from 'react-toastify';
import { useState } from 'react';

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
    <form onSubmit={onSubmit}>
      <input
        name="input"
        value={input}
        onChange={onChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button>Search</button>
    </form>
  );
};
