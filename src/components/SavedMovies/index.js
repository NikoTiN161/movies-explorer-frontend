import React from 'react';
import MoviesCardList from '../MoviesCardList';
import './style.css';
import { movies } from '../../utils/constants';
import SearchForm from '../SearchForm';
import AddMore from '../AddMore';


function SavedMovies(props) {

  const savedMovies = [movies[1], movies[3], movies[5], movies[7],];

  return (
    <main className={`movies ${props.className}`}>
      <SearchForm className="movies__search" />
      <MoviesCardList
      cards={savedMovies} />
      <AddMore />
    </main>
  );
}

export default SavedMovies;