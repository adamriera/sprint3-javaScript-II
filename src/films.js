// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map (directors => directors.director)
    return result; 
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let filmsOfDirector = array.filter (films => (films.director === director));
    return filmsOfDirector;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) { 
  let averageFilmsofDirector = array.filter(films => films.director === director); 
  let total = averageFilmsofDirector.reduce((average, film) => average + film.score, 0); 
  let averageScore = total / averageFilmsofDirector.length; 
    return averageScore; 
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let alphabeticalFilmList = [...array].sort((firstFilm, lastFilm) => firstFilm.title > lastFilm.title ? 1 : -1);
  return alphabeticalFilmList.slice(0, 20).map(film => film.title);
} 


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArray = [...array];
  newArray.sort((oldestFilm, newestFilm) => {
    if (oldestFilm.year < newestFilm.year) {
      return -1;
    } else if (oldestFilm.year > newestFilm.year) {
      return 1;
    } else {
      if (oldestFilm.title < newestFilm.title) {
        return -1;
      } else if (oldestFilm.title > newestFilm.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return newArray;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  let filteredMovies = movies.filter(movie => movie.genre.includes(category));
  let scores = filteredMovies.map(movie => parseFloat(movie.score)).filter(score => !isNaN(score));
  let averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
    return parseFloat(averageScore.toFixed(2));
}


function hoursToMinutes(movies) {
  return movies.map(movie => {
    let duration = movie.duration;
    let totalTime = /(\d+)h(?:\s(\d+)min)?/;
    let match = duration.match(totalTime);

    if (match) {
      let hours = parseInt(match[1]) || 0;
      let minutes = parseInt(match[2]) || 0;
      let totalMinutes = hours * 60 + minutes;
      return { ...movie, duration: totalMinutes };
    }

    return { ...movie, duration: 0 };
  });
}
    

function bestFilmOfYear(movies, year) {
  let filmsOfYear = movies.filter(movie => movie.year === year);
  let sortedFilms = filmsOfYear.sort((a, b) => b.score - a.score);
    return sortedFilms.length > 0 ? [sortedFilms[0]] : [];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
 