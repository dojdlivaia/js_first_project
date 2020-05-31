"use strict";
let number = 5;
const leftBorderWidth = 1;
const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?","0");
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    gendors : [],
    privat : false
};
const a = prompt ("Один из последних просмотренных фильмов?"," "),
      b = prompt('На сколько оцените его?',""),
      c = prompt ("Один из последних просмотренных фильмов?"," "),
      d = prompt('На сколько оцените его?',"");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);