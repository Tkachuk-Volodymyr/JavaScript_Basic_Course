"use strict";

const personaMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

while (true) {
  let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  if (numberOfFilms !== 0) {
    personaMovieDB.count = numberOfFilms;
    break;
  }
}


// for (let i = 0; i < 2; i++) {
//   while (true) {
//     let lastFilm = prompt('Напишите, один из последних просмотренных фильмов?');
//     let valueOfFilm = prompt('Насколько оцените его?');
//     if (+lastFilm !== 0 && +valueOfFilm !== 0 && lastFilm.length < 50) {
//       personaMovieDB.movies[lastFilm] = valueOfFilm;
//       break;
//     }
//   }
// }

// let i = 2;
// while (i) {
//   let lastFilm = prompt('Напишите, один из последних просмотренных фильмов?');
//   let valueOfFilm = prompt('Насколько оцените его?');
//   if (+lastFilm !== 0 && +valueOfFilm !== 0 && lastFilm.length < 50) {
//     personaMovieDB.movies[lastFilm] = valueOfFilm;
//     i--;
//   }23
// }

let x = 2;
do {
  let lastFilm = prompt('Напишите, один из последних просмотренных фильмов?');
  let valueOfFilm = prompt('Насколько оцените его?');
  if (+lastFilm !== 0 && +valueOfFilm !== 0 && lastFilm.length < 50) {
    personaMovieDB.movies[lastFilm] = valueOfFilm;
    x--;
  }
} while (x);

if (personaMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
  console.log('Вы классический зритель');
} else {
  console.log('Произошла ошибка');
}


console.log(personaMovieDB);