const searchMovie = document.getElementById("search-movie");
const movieList = document.getElementById("movie-list");
const resultContent = document.getElementById("result-content");
const btn = document.getElementById("button-search");

let movieToFind;

const focusOnForm = (e) => {
  searchMovie.focus();
};
window.addEventListener("load", focusOnForm);

const movieToSearch = (e) => {
  movieToFind = searchMovie.value.trim();
  console.log(movieToFind);
  if (movieToFind.length > 0) {
    movieList.style.display = "block";
    findMovie(movieToFind);
  }
};

btn.addEventListener("click", movieToSearch);

let numberOfResults;
const findMovie = () => {
  const _endpoint = ` http://www.omdbapi.com/?apikey=75f033ce&s=${movieToFind}&page=1`;
  fetch(_endpoint)
    .then((response) => {
      //return response.json()
      const res = response.json();
      return res;
    })
    .then((result) => {
      console.log(result);
      if (result.Response === "False") {
        alert("Movie not found!");
      } else if (result.totalResults > 0 && result.totalResults <= 10) {
        showListShort(result);
      } else {
        numberOfResults = result.totalResults;
        showListLong(result);
      }
    });
};

const showListLong = (items) => {
  if (items.Search.length !== 0) {
    movieList.innerHTML = "";
    for (let i = 0; i < items.Search.length; i++) {
      let movieListItem = document.createElement("div");
      let poster;
      if (items.Search[i].Poster !== "N/A") {
        poster = items.Search[i].Poster;
      }
      movieListItem.classList.add("movie-list-item");
      movieListItem.innerHTML = `
     <div class="movie-list-item-small-poster">
         <img src="${poster}">
     </div>
     <div class="movie-item-info">
        <h3>${items.Search[i].Title}</h3>
        <p>${items.Search[i].Year}</p>
     </div>
     <button id="${items.Search[i].imdbID}"class="details">Details</button>
     `;
      movieList.append(movieListItem);
    }
    let nextButton = document.createElement("button");
    nextButton.classList.add("next-button");
    nextButton.innerHTML = "Next";
    movieList.append(nextButton);
  }
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("next-button")) {
    movieList.innerHTML = "";
    let pageNum;

    for (let i = 2; i <= Math.ceil(numberOfResults / 10) + 1; i++) {
      pageNum = i;
      const _endpointIfMoreThenOnePage = ` http://www.omdbapi.com/?apikey=75f033ce&s=${movieToFind}&page=${pageNum}`;
      fetch(_endpointIfMoreThenOnePage)
        .then((response) => {
          const res = response.json();
          return res;
        })
        .then((res) => {
          console.log(res);
          showListLong(res);
        });
    }
  }
});

const showListShort = (items) => {
  if (items.Search.length !== 0) {
    movieList.innerHTML = "";
    for (let i = 0; i < items.Search.length; i++) {
      let movieListItem = document.createElement("div");
      let poster;
      if (items.Search[i].Poster !== "N/A") {
        poster = items.Search[i].Poster;
      }
      movieListItem.classList.add("movie-list-item");
      movieListItem.innerHTML = `
       <div class="movie-list-item-small-poster">
           <img src="${poster}alt="poster of the movie">
       </div>
       <div class="movie-item-info">
          <h3>${items.Search[i].Title}</h3>
          <p>${items.Search[i].Year}</p>
       </div>
       <button id="${items.Search[i].imdbID}"class="details">Details</button>
       `;
      movieList.append(movieListItem);
    }
  }
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("details")) {
    searchMovie.value = "";
    movieList.style.display = "none";

    const _endpoint1 = ` http://www.omdbapi.com/?apikey=75f033ce&i=${e.target.id}`;
    fetch(_endpoint1)
      .then((response) => {
        const res = response.json();
        return res;
      })
      .then((result) => {
        console.log(result);
        showDetails(result);
      });
  }
});

const showDetails = (info) => {
  resultContent.innerHTML = `
 <div class="movie-poster-big">
 <img src = "${info.Poster}alt="Movie poster">
 </div>
 <div class="movie-info">
        <h3 class="movie-title">${info.Title}</h3>
        <p class="year">${info.Year}</p>
        
        <p class="short-content">${info.Plot}</p>
        </div>
 `;
  resultContent.style.display = "block";
};

const hideDetails = (e) => {
  if ((resultContent.style.display = "block")) {
    resultContent.style.display = "none";
  }
};

searchMovie.addEventListener("click", hideDetails);

const hideDetails1 = (e) => {
  searchMovie.value = "";
};

searchMovie.addEventListener("click", hideDetails1);

const resultWrapper = document.querySelector(".result-wrapper");
