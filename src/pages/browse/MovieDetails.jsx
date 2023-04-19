import React from 'react';
import styles from './MovieDetails.module.css';
import useMovie from '../../hooks/use-movie';
import YouTube from 'react-youtube';
const MovieDetails = (props) => {
  const { movie } = props;
  console.log(movie);
  const videoUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=c52e27337e5143e8ee33dff06d956013&language=en-US`;
  const { isLoading, error, movies: videoOfMovies } = useMovie(videoUrl);

  const videoTrailer =
    videoOfMovies &&
    videoOfMovies.find(
      (movie) => movie.site === 'YouTube' && movie.type === 'Trailer'
    );
  const videoTeaser =
    videoOfMovies &&
    videoOfMovies.find(
      (movie) => movie.site === 'YouTube' && movie.type === 'Teaser'
    );
  const video =
    (videoTrailer && videoTrailer.key) ||
    (videoTeaser && videoTeaser.key) ||
    '';

  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <React.Fragment>
      {isLoading && !error && <h3>Loading ...</h3>}
      {
        <div className={styles.details}>
          <div className={styles.discription}>
            <h2>{movie.original_title || movie.name}</h2>
            <div className={styles.line}></div>
            <div className={styles.release}>
              <div>Release Date: {movie.release_date}</div>
              <div>Vote: {`${movie.vote_average} / 10`}</div>
            </div>
            <p>{movie.overview}</p>
          </div>
          <div className={styles['trailer-video']}>
            {video !== '' && <YouTube videoId={video} opts={opts} />}
            {video === '' && (
              <img
                src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                alt={movie.name}
              />
            )}
          </div>
        </div>
      }
    </React.Fragment>
  );
};
export default MovieDetails;
