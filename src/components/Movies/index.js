import React from 'react';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader';
import SearchForm from '../SearchForm';
import './style.css';
import { movies } from '../../utils/constants';
import AddMore from '../AddMore';


function Movies(props) {
  return (
    <main className={`movies ${props.className}`}>
      <SearchForm className="movies__search" />
      {/* <Preloader /> */}
      <MoviesCardList cards={movies} />
      <AddMore />
    </main>
  );
}

export default Movies;