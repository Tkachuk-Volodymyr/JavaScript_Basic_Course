'use strict';

const personaMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start() {
    personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personaMovieDB.count === '' || personaMovieDB.count === null || isNaN(personaMovieDB.count)) {
      personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  writeYourGenres() {
    // for (let i = 0; i < 3; i++) {
    //   let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1} ?`);

    //   if (favouriteGenre !== null && favouriteGenre !== '') {
    //     personaMovieDB.genres[i] = favouriteGenre;
    //   } else {
    //     alert('Вы ввели некорректные данные!');
    //     i--;
    //   }
    // }

    // аналогичная запись
    for (let i = 0; i < 1; i++) {
      let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

      if (genres === '' || genres === null) {
        alert('Вы ввели некорректные данные!');
        i--;
      } else {
        personaMovieDB.genres = genres.split(', ');
        personaMovieDB.genres.sort();
      }
    }

    personaMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item} !`);
    });
  },

  rememberMyFilms() {
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
  },

  detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
      console.log('Вы классический зритель');
    } else {
      console.log('Произошла ошибка');
    }
  },

  toggleVisibleMyDB() {
    if (personaMovieDB.privat) {
      personaMovieDB.privat = false;
    } else {
      personaMovieDB.privat = true;
    }
  },

  showMyDB(hidden) {
    if (!hidden) {
      console.log(personaMovieDB);
    }
  },
};