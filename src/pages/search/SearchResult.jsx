import React from 'react';
import styles from './SearchResult.module.css';
import useMovie from '../../hooks/use-movie';
const SearchResult = (props) => {
  const { isLoading, error, movies } = useMovie(props.searchUrl);
  console.log(movies);
  return (
    <div className={styles['search-result']}>
      <h2>Search Result</h2>
    </div>
  );
};
export default SearchResult;
