import * as React from 'react';

import { MovieData } from './@types/MovieTypes';
import config from './config';

import NavBar from './components/NavBar/NavBar';
import MoviesDir from './components/MoviesDirectory/MoviesDir';

import './App.scss';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [movies, setMovies] = React.useState<MovieData[] | null>(null);
  React.useEffect(() => {
    const { BaseApiUrl, ApiKey } = config;
    fetch(`${BaseApiUrl}popular?api_key=${ApiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <NavBar />
      <div className='app'>
        {movies ? <MoviesDir movies={movies} /> : <Loader size={20} />}
      </div>
    </>
  );
};

export default App;
