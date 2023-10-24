// https://www.omdbapi.com/?apikey=ac285209&
const moviesListEl = document.querySelector('.movie__list')


 function onSearch (){
  let inputValue =  document.querySelector('.search__input').value
   return inputValue 
}


async function callAPI() {
  let movies = await fetch(`https://www.omdbapi.com/?apikey=ac285209&s=${}`);
  let moviesData = await movies.json();
  let moviesDataCut =  moviesData.Search.slice(0,6)
moviesListEl.innerHTML =   moviesDataCut.map ((movie) => renderMovies(movie)).join("")
}

callAPI()


function renderMovies(movie) {
  return `<div class="movie__card">
<figure class="movie__img--wrapper">
    <img src= ${movie.Poster} class="movie__img" alt="">
</figure>
<div class="movie__info--wrapper">
  <h2 class="movie__title">${movie.Title}</h1>
  <h3 class="movie__year">${movie.Year}</h3>
</div>
</div>`
}




















