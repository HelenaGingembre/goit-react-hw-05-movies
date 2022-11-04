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
    const page = 1;
    // console.log('movieSearchQuery', movieSearchQuery);
    getSearchFilms(movieSearchQuery, page).then(data => {
      console.log('data.results-  getSearchFilms-', data.results);

      setSearchResult(data.results);
    });
  }, [movieSearchQuery]);

  // console.log('searchResult', searchResult);
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
        <h3>
          There are no movies that matched your query.... Try to find something
        </h3>
      )}
      <Outlet></Outlet>

      {/* <Routes>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes> */}
    </main>
  );
};

export default Movies;
