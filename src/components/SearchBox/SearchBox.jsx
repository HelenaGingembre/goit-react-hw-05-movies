import PropTypes from 'prop-types';
import {
  SearchBoxContainer,
  Btn,
  InputSearch,
  FiSearchIcon,
} from './SearchBox.styled';

export const SearchBox = ({ value, onChange, onSubmit }) => {
  // const [query, setQuery] = useState('');

  const handleInput = event => {
    onChange(event.target.value);
  };

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //  const movie = {
  //       query: query,
  //     };
  //     // getSearchFilms(query);
  //     setQuery('');
  //   };

  return (
    <SearchBoxContainer onSubmit={onSubmit}>
      <Btn type="submit">
        <FiSearchIcon />
      </Btn>
      <InputSearch
        onChange={handleInput}
        placeholder="Search for a movies, tv show ..."
        name="search"
        required
        autoFocus
        value={value}
      />
    </SearchBoxContainer>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
