"use strict";
let number = 5;
const leftBorderWidth = 1;



// start();
const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function () {
        this.count = +prompt ("Сколько фильмов вы уже посмотрели?","0");
        while (this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt ("Сколько фильмов вы уже посмотрели?","0");
        }
    },
    rememberMyFilms: function(){
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
    },
    writeYourGenres: function (){
        for (let i = 1; i<=3; i++){
            let a = prompt (`Ваш любимый жанр под номером ${i}`,"");
            if (a != '' && a != null){
                 personalMovieDB.genres[i-1] = a;}
            else {
                i--;
            }
    
        }
        this.genres.forEach((item,i) =>{
            console.log(`Любимый жанр номер ${i + 1}- это ${item}`)
            
        });
    },
    detectedPersonalLevel: function (){
    if (personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else {console.log("Вы киноман");}

},
    showMyDB:function (hidden){
    if (!hidden) {console.log(personalMovieDB);}
},
    toggleVisibleMyDB : function(){
        this.privat = !this.privat;    
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
// const a = prompt ("Один из последних просмотренных фильмов?"," "),
//       b = prompt('На сколько оцените его?',""),
//       c = prompt ("Один из последних просмотренных фильмов?"," "),
//       d = prompt('На сколько оцените его?',"");

// rememberMyFilms();


// detectedPersonalLevel();

personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();