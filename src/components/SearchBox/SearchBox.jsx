import { Component } from 'react';
import { useState } from 'react';
// import { FiSearch } from 'react-icons/fi';

import PropTypes from 'prop-types';
import {
  SearchBoxContainer,
  Btn,
  InputSearch,
  FiSearchIcon,
} from './SearchBox.styled';

export const SearchBox = () => {
  const [query, setQuery] = useState('');

  const handleInput = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const movie = {
      query: query,
    };

    // getSearchFilms(query);

    setQuery('');
  };

  return (
    <SearchBoxContainer onSubmit={handleSubmit}>
      <Btn type="submit">
        <FiSearchIcon />
      </Btn>
      <InputSearch
        onChange={handleInput}
        placeholder="Search for a movies, tv show ..."
        name="search"
        required
        autoFocus
        value={query}
      />
    </SearchBoxContainer>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string,
};
