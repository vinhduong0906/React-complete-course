import React, { useEffect, useState } from 'react';
import styles from './Banner.module.css';
import { debounce } from 'throttle-debounce';
{
  /*---------------
Props: Movie array of Original movie
Return: Render the random movie on the Banner
----------------*/
}
const Banner = (props) => {
  const [randomMovie, setRandomMovie] = useState(null);
  useEffect(() => {
    const movie =
      props.movies[Math.floor(Math.random() * props.movies.length - 1)];
    setRandomMovie(movie);
  }, [props.movies]);
  const setTime = setTimeout(() => {}, 200);
  clearTimeout(setTime);
  return (
    <React.Fragment>
      {randomMovie && (
        <div className={styles.banner}>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${randomMovie.backdrop_path}`}
            alt={randomMovie.name}
          ></img>
          <div className={styles.description}>
            <div className={styles.title}>{randomMovie.name}</div>
            <div className={styles.actions}>
              <button>Play</button>
              <button>My List</button>
            </div>
            <p>{randomMovie.overview}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Banner;
