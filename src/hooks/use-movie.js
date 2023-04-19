import useHttp from './use-http';
import { useEffect, useState } from 'react';
const useMovie = (url) => {
  const [movies, setMovies] = useState('');
  const { isLoading, error, sendRequest } = useHttp();
  const getMovies = (data) => {
    if (!data.results) {
      setMovies(data);
      return;
    }
    const moviesData = [];
    data.results.map((movie) => {
      return moviesData.push(movie);
    });
    setMovies(moviesData);
  };
  useEffect(() => {
    sendRequest(
      {
        url: url,
      },
      getMovies
    );
  }, [url]);
  return { movies, isLoading, error };
};
export default useMovie;
