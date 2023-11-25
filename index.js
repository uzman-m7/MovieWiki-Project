// https://www.omdbapi.com/?apikey=ac285209&
const moviesListEl = document.querySelector(".movie__list");

function onSearch(event) {
  const search = event.target.value;
  callAPI(search);
  // document.querySelector(".loading__state").style.display = "none";
}

async function callAPI(search) {
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=ac285209&s=${search}`
  );
  const moviesResponse = await movies.json();
  const moviesData = moviesResponse.Search;

  if (moviesData === false) {
    return (document.querySelector(
      ".movie__img--skeleton .movie__title--skeleton .movie__year--skeleton"
    ).style.display = "block");
  }

  if (search === undefined) {
    return (document.querySelector(" .no-search").style.display = "block");
  } else {
    return (moviesListEl.innerHTML = moviesData
      .slice(0, 6)
      .map((movie) => renderMovies(movie))
      .join(""));
  }
}

function renderMovies(movie) {
  return `<div class="movie__card">
<figure class="movie__img--wrapper">
    <img src= ${movie.Poster} class="movie__img" alt="">
</figure>
<div class="movie__info--wrapper">
  <h2 class="movie__title">${movie.Title}</h1>
  <h3 class="movie__year">${movie.Year}</h3>
</div>
</div>`;
}
