import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { getSearchFilms } from '../service/APIservice';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieSearchQuery = searchParams.get('query');

  const [searchResult, setSearchResult] = useState('');

  const updateQuery = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    // const form = e.currentTarget;
    // setSearchParams({ inputValue: form.elements.search.value });

    if (inputValue === '') {
      alert('Enter movie name');
      return;
    }
    updateQuery(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    if (movieSearchQuery === '') {
      setSearchResult('');
      return;
    }
    getSearchFilms({ query: movieSearchQuery, page: 1 }).then(data => {
      console.log('data.results', data);
      setSearchResult(data.results);
    });
  }, [movieSearchQuery]);

  return (
    <main>
      <h1>Movies Popular page</h1>
      <SearchBox
        name="search"
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleSubmit}
      ></SearchBox>
      {searchResult !== '' ? (
        // <MoviesList movies={searchResult} />
        <p>yello</p>
      ) : (
        <h3>There are no movies to show... Enter a query in the search</h3>
      )}
      <Outlet></Outlet>

      {/* <Routes>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes> */}
    </main>
  );
};

export default Movies;
