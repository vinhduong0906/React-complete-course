import React, { useEffect } from 'react';
import useMovie from '../../../hooks/use-movie';
import styles from './MovieList.module.css';
{
  /*---------------
Props: {
  url: Api of Movie's url,
  imgUrl: Api of Image's url
  imgType: type of Image(poster/backdrop) need to be display
  setBannerMovies: send the Movie array to Banner Component
  onShowDetails: send the Movie has clicked and the Movie Type to Browse Component
  (Show the Details of Clicked Movie funtion)
  movieType: type of rendered Movie
}
Receive props from Browse Component and render the image of movie
----------------*/
}
const MovieList = (props) => {
  const {
    url: movieUrl,
    imgUrl,
    imgType,
    setBannerMovies,
    onShowDetails,
    movieType,
  } = props;
  {
    /*-------------------------------*/
  }
  const { isLoading, error, movies } = useMovie(movieUrl);
  {
    /*-------------------------------*/
  }
  useEffect(() => {
    if (setBannerMovies) {
      setBannerMovies(movies);
    }
  }, [movies]);
  {
    /*-------------------------------*/
  }
  const onShowDetailsHandler = (event) => {
    event.preventDefault();
    const movie = movies.find((mv) => mv.id == event.target.id);
    onShowDetails(movieType, movie);
  };
  {
    /*-------------------------------*/
  }
  return (
    <React.Fragment>
      {error && !isLoading && <h2>No movie found!</h2>}
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
