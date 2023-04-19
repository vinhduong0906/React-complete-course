import React, { useState } from 'react';
import styles from './Browse.module.css';
import NavBar from './NavBar';
import Banner from './Banner';
import MovieList from './movie-type/movie-list/MovieList';
import MovieDetails from './MovieDetails';
function Browse() {
  const API_KEY = 'c52e27337e5143e8ee33dff06d956013';
  const API_URL = 'https://api.themoviedb.org/3';
  const IMG_URL = 'https://image.tmdb.org/t/p/w200/';
  const requests = {
    fetchTrending: `${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${API_URL}/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US`,
  };
  const [bannerMovies, setBannerMovies] = useState('');
  const [rootId, setRootId] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [clickedMovie, setClickedMovie] = useState('');

  const setBannerMoviesHandler = (movies) => {
    setBannerMovies(movies);
  };
  const showDetailsHandler = (movieType, movie) => {
    console.log('click', movie.id, clickedMovie.id);

    if (clickedMovie.id === movie.id) {
      setShowDetails((showDetails) => !showDetails);
      return;
    }
    setClickedMovie(movie);
    setRootId(movieType);
    setShowDetails(true);
  };
  return (
    <div className={styles.browse}>
      <NavBar
        url={requests.fetchNetflixOriginals}
        imgUrl={IMG_URL}
        imgType='poster'
      />
      <Banner movies={bannerMovies} />
      <div className={styles['movies-container']}>
        <div className={styles.original}>
          <MovieList
            setBannerMovies={setBannerMoviesHandler}
            onShowDetails={showDetailsHandler}
            url={requests.fetchNetflixOriginals}
            imgUrl={IMG_URL}
            imgType='poster'
            movieType='Originals'
          />
          {showDetails && rootId === 'Originals' && (
            <MovieDetails movie={clickedMovie} />
          )}
        </div>
        <div>
          <div className={styles.title}>Xu hướng</div>
          <MovieList
            onShowDetails={showDetailsHandler}
            url={requests.fetchTrending}
            imgUrl={IMG_URL}
            imgType='backdrop'
            movieType='Trending'
          />
          {showDetails && rootId === 'Trending' && (
            <MovieDetails movie={clickedMovie} />
          )}
        </div>
        <div>
          <div className={styles.title}>Xếp hạng cao</div>
          <MovieList
            onShowDetails={showDetailsHandler}
            url={requests.fetchTopRated}
            imgUrl={IMG_URL}
            imgType='backdrop'
            movieType='TopsRated'
          />
          {showDetails && rootId === 'TopsRated' && (
            <MovieDetails movie={clickedMovie} />
          )}
        </div>
        <div>
          <div className={styles.title}>Hành động</div>
          <MovieList
            onShowDetails={showDetailsHandler}
            url={requests.fetchActionMovies}
            imgUrl={IMG_URL}
            imgType='backdrop'
            movieType='Action'
          />
          {showDetails && rootId === 'Action' && (
            <MovieDetails movie={clickedMovie} />
          )}
        </div>
        <div>
          <div className={styles.title}>Hài</div>
          <MovieList
            onShowDetails={showDetailsHandler}
            url={requests.fetchComedyMovies}
            imgUrl={IMG_URL}
            imgType='backdrop'
            movieType='Comedy'
          />
          {showDetails && rootId === 'Comedy' && (
            <MovieDetails movie={clickedMovie} />
          )}
        </div>
        <div>
          <div className={styles.title}>Kinh dị</div>
          <MovieList
            onShowDetails={showDetailsHandler}
            url={requests.fetchHorrorMovies}
            imgUrl={IMG_URL}
            imgType='backdrop'
            movieType='Horror'
          />
          {showDetails && rootId === 'Horror' && (
            <MovieDetails movie={clickedMovie} />
          )}
        </div>
        <div>
          <div className={styles.title}>Lãng mạn</div>
          <MovieList
            onShowDetails={showDetailsHandler}
            url={requests.fetchRomanceMovies}
            imgUrl={IMG_URL}
            imgType='backdrop'
            movieType='Romance'
          />
          {showDetails && rootId === 'Romance' && (
            <MovieDetails movie={clickedMovie} />
          )}
        </div>
        <div>
          <div className={styles.title}>Tài liệu</div>
          <MovieList
            onShowDetails={showDetailsHandler}
            url={requests.fetchDocumentaries}
            imgUrl={IMG_URL}
            imgType='backdrop'
            movieType='Documentaries'
          />
          {showDetails && rootId === 'Documentaries' && (
            <MovieDetails movie={clickedMovie} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Browse;
