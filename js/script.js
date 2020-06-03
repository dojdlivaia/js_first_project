"use strict";
let number = 5;
const leftBorderWidth = 1;
let numberOfFilms ;

function start() {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?","0");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?","0");
    }
}
// start();
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
// const a = prompt ("Один из последних просмотренных фильмов?"," "),
//       b = prompt('На сколько оцените его?',""),
//       c = prompt ("Один из последних просмотренных фильмов?"," "),
//       d = prompt('На сколько оцените его?',"");
function rememberMyFilms(){
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
}
// rememberMyFilms();

function detectedPersonalLevel(){
    if (personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else {console.log("Вы киноман")}

}
// detectedPersonalLevel();
function showMyDB(hidden){
    if (!hidden) {console.log(personalMovieDB)}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i<=3; i++){
        const a = prompt (`Ваш любимый жанр под номером ${i}`,"");
        personalMovieDB.genres[i-1] = a;

    }
}
writeYourGenres();