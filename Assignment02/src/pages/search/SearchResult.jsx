import React, { useState } from 'react';
import styles from './SearchResult.module.css';
import useMovie from '../../hooks/use-movie';
import MovieDetails from '../browse/MovieDetails';
{
  /*---------------
Props: searchUrl
Render Movie from searchUrl
----------------*/
}
const SearchResult = (props) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w200/';
  const { isLoading, error, movies } = useMovie(props.searchUrl);
  const [clickedMovie, setClickedMovie] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  {
    /*---------------Show Details of Movie handler----------------*/
  }
  const showDetailsHandler = (event) => {
    if (clickedMovie != null)
      if (event.target.id == clickedMovie.id) {
        setShowDetail((detail) => !detail);
        return;
      }
    const movie = movies && movies.find((mv) => mv.id == event.target.id);
    setClickedMovie(movie);
    setShowDetail(true);
  };
  {
    /*-------------------------------*/
  }
  return (
    <div className={styles['search-result']}>
      <h2>Search Result</h2>
      {props.searchUrl != '' && (
        <div className={styles['movies-result']}>
          {error && !isLoading && <h2>No movie found!</h2>}

          {isLoading && !error && <div>Loading...</div>}
          {!isLoading &&
            movies &&
            movies.map(
              (movie) =>
                movie.poster_path && (
                  <div key={movie.id} className={styles.movie}>
                    <img
                      onClick={showDetailsHandler}
                      id={movie.id}
                      src={`${IMG_URL}${movie.poster_path}`}
                      alt={movie.name}
                    ></img>
                    {clickedMovie &&
                      clickedMovie.id === movie.id &&
                      showDetail && <MovieDetails movie={clickedMovie} />}
                  </div>
                )
            )}
        </div>
      )}
    </div>
  );
};
export default SearchResult;
