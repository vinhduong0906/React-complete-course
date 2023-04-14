import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState(null);
  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films')
      .then((respon) => {
        return respon;
      })
      .then((data) => {
        setMovies(data.result);
      });
  };
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
