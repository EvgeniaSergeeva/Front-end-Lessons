const myApi = "5e5fb733d0a4033cb5d22e7a5b8f169c";
const searchCity = document.getElementById("search-city");
const btn = document.getElementById("button-search");
const cityWeather = document.querySelector(".city-forecast");
const clearBtn = document.querySelector(".clear");
let cityToFind;

const focusOnForm = (e) => {
  searchCity.focus();
};
window.addEventListener("load", focusOnForm);

const submitCity = (e) => {
  cityToFind = searchCity.value;
  if (cityToFind.length > 0) {
    cityWeather.style.display = "block";
    inspectLocalStorage();
  }
};
btn.addEventListener("click", submitCity);

const findForecast = (city) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}&units=metric`;
  fetch(endpoint)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      localStorage.setItem(
        `cached-result${cityToFind}`,
        JSON.stringify(result)
      );
      localStorage.setItem(`last-request${cityToFind}`, Date.now());
      showForecast(result);
    });
};

function inspectLocalStorage() {
  const lastRequest = localStorage.getItem(`last-request${cityToFind}`);
  if (lastRequest) {
    const timeNow = Date.now();
    const diff = timeNow - lastRequest;
    if (diff < 2 * 3600 * 1000) {
      const cachedResult = localStorage.getItem(`cached-result${cityToFind}`);
      showForecast(JSON.parse(cachedResult));
    } else {
      findForecast(cityToFind);
    }
  } else {
    findForecast(cityToFind);
  }
}

const showForecast = (items) => {
  if (items.cod === "404") {
    alert("The city not found!");
  } else {
    cityWeather.innerHTML = `
        <h2>${items.name}</h2>
         <p>Sky:${items.weather[0].description}</p>
        <p> Temperature: ${items.main.temp} degrees</p>
        <p>Pressure: ${items.main.pressure} mm</p>
        <p>Humidity: ${items.main.humidity} %</p>
        <p>Wind: ${items.wind.speed} m/sec</p>
        </div>
        <button class="clear">Clear</button>
        `;
  }
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("clear")) {
    searchCity.value = "";
    cityWeather.style.display = "none";
  }
});
