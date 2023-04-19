import React, { useState, useCallback } from 'react';
import NavBar from '../browse/NavBar';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
{
  /*---------------
Show the NavBar, Search Form and Search Result Component
----------------*/
}
const Search = () => {
  const [searchUrl, setSearchUrl] = useState('');
  const searchKeywordHandler = useCallback((keyword) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=c52e27337e5143e8ee33dff06d956013`;
    setSearchUrl(url);
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <SearchForm onSearchKeyword={searchKeywordHandler} />

      <SearchResult searchUrl={searchUrl} />
    </React.Fragment>
  );
};

export default Search;
