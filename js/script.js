'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

// start();

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    const favouriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1} ?`);
    personaMovieDB.genres[i] = favouriteGenre;
  }
}

// writeYourGenres();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personaMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personaMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB() {
  if (!personaMovieDB.privat) {
    console.log(personaMovieDB);
  }
}

// showMyDB();