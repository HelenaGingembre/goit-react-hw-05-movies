import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { getSearchFilms } from '../service/APIservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieSearchQuery = searchParams.get('query') ?? '';

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
      toast.error('Search term is empty. Enter something to search');
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
    console.log('movieSearchQuery', movieSearchQuery);
    getSearchFilms({ query: movieSearchQuery, page: 1 }).then(data => {
      console.log('data.results', data.results);
      // setSearchParams(data.results);
      setSearchResult(data.results);
    });
  }, [movieSearchQuery]);

  console.log('searchResult', searchResult);
  return (
    <main>
      <h1>Movies Popular page</h1>
      <SearchBox
        // name="search"
        value={inputValue}
        onChange={setInputValue}
        onClick={handleSubmit}
      ></SearchBox>
      <ToastContainer autoClose={2000} />
      {searchResult !== '' ? (
        <MoviesList movies={searchResult} />
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
