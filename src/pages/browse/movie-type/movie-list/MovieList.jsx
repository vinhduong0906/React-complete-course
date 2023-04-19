import React, { useEffect } from 'react';

import useMovie from '../../../../hooks/use-movie';
import styles from './movieList.module.css';
const MovieList = (props) => {
  const {
    url: movieUrl,
    imgUrl,
    imgType,
    setBannerMovies,
    onShowDetails,
    movieType,
  } = props;
  const { isLoading, error, movies } = useMovie(movieUrl);
  useEffect(() => {
    if (setBannerMovies) {
      setBannerMovies(movies);
    }
  }, [movies]);
  const onShowDetailsHandler = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    const movie = movies.find((mv) => mv.id == event.target.id);
    console.log(movie);
    onShowDetails(movieType, movie);
  };
  return (
    <React.Fragment>
      {error && <h2>Some thing went wrong!</h2>}
      <div className={styles['movie-list']}>
        {isLoading && !error && <div>Loading...</div>}
        {!isLoading &&
          movies &&
          movies.map(
            (movie) =>
              movie.poster_path && (
                <img
                  onClick={onShowDetailsHandler}
                  key={movie.id}
                  id={movie.id}
                  src={`${imgUrl}${
                    imgType === 'poster'
                      ? movie.poster_path
                      : movie.backdrop_path
                  }`}
                  alt={movie.name}
                ></img>
              )
          )}
      </div>
    </React.Fragment>
  );
};
export default MovieList;
