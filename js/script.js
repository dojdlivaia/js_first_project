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
// const a = prompt ("Один из последних просмотренных фильмов?"," "),
//       b = prompt('На сколько оцените его?',""),
//       c = prompt ("Один из последних просмотренных фильмов?"," "),
//       d = prompt('На сколько оцените его?',"");


for (let i = 0; i<2; i++) {
    const a = prompt ("Один из последних просмотренных фильмов?",""),
          b = prompt('На сколько оцените его?',"");
    if (a != null && b != null && a != '' && b!='' && a.length < 50)
    {     personalMovieDB.movies[a] = b;
          console.log('done')
    }
    else {
    console.log('Error');
    i--;}
}
if (personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB < 30) {
    console.log('Вы классический зритель');
} else {console.log("Вы киноман")}

console.log(personalMovieDB);