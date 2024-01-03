class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
//a String representing the studio, and a String representing the rating as its arguments,
//and sets the respective class properties to these values.
const movie1 = new Movie("Leo", "Seven Screen Studio", 3);
const movie2 = new Movie("Jailor", "Sun Pictures", "3.5");
console.log(movie1);
console.log(movie2);
//b) The constructor for the class Movie will set the class property rating to "PG" as
//default when no rating is provided.
class MoviePg {
  constructor(title, studio, rating="PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const movie3 = new MoviePg("Leo", "Seven Screen Studio");
console.log(movie3);
//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of
//only those movies in the input array with a rating of "PG".You may assume the input array is full of Movie
//instances.The returned array need not be full.
class Movierate {
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
  }
}

function getPG(movies) {
  // Use Array.filter to create a new array with only "PG" rated movies
  const pgMovies = movies.filter((movie) => movie.rating === "PG");
  return pgMovies;
}
const movies = [
  new Movierate("Movie1", "PG"),
  new Movierate("Movie2", "PG-13"),
  new Movierate("Movie3", "PG"),
  new Movierate("Movie4", "R"),
];

const pgMovies = getPG(movies);

console.log(pgMovies);
//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//the studio “Eon Productions”, and the rating “PG­13”

const movieroy = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(movieroy);
