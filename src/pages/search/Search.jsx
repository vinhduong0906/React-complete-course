import React, { useState, useCallback } from 'react';
import NavBar from '../browse/NavBar';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import useMovie from '../../hooks/use-movie';
const Search = () => {
  const [searchUrl, setSearchUrl] = useState('');

  const searchUrlHandler = useCallback((url) => {
    setSearchUrl(url);
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <SearchForm onSearchUrl={searchUrlHandler} />
      <SearchResult searchUrl={searchUrl} />
    </React.Fragment>
  );
};

export default Search;
