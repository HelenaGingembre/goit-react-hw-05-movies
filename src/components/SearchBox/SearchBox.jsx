import PropTypes from 'prop-types';
import {
  SearchBoxContainer,
  Btn,
  InputSearch,
  FiSearchIcon,
} from './SearchBox.styled';

export const SearchBox = ({ value, onChange, onClick }) => {
  // const handleInput = event => {
  //   onChange(event.target.value);
  // };

  return (
    <SearchBoxContainer onSubmit={onClick}>
      <Btn type="submit">
        <FiSearchIcon />
      </Btn>
      <InputSearch
        onChange={e => {
          onChange(e.target.value);
        }}
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
  onClick: PropTypes.func.isRequired,
};
