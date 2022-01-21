"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastFilm = prompt('Напишите, один из последних просмотренных фильмов?');
let valueOfFilm = prompt('Насколько оцените его?');

personaMovieDB.movies[lastFilm] = valueOfFilm;

lastFilm = prompt('Напишите, один из последних просмотренных фильмов?');
valueOfFilm = prompt('Насколько оцените его?');

personaMovieDB.movies[lastFilm] = valueOfFilm;

console.log(personaMovieDB);