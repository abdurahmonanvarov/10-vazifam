const continer = document.querySelector(".continer");
const search = document.querySelector(".search_box #button");
const weather = document.querySelector(".wather-box");
const weatherDetals = document.querySelector(".sweathre-detals");
// const search = document.querySelector('.search_box #button');
// const search = document.querySelector('.search_box #button');

search.addEventListener("click", function (event) {
  event.preventDefault();

  const apiData = `98740f4ebc0d63bc0f8ba70090e5a091`;

  const city = document.querySelector(".search_box input").value;
  if (city == "") {
    return;
  }

  fetch(
    // `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiData}`
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiData}`
  )
    .then((data) => data.json())
    .then((json) => {
      const img = document.querySelector(".wather-box img");
      const temptarutra = document.querySelector('#temp');
      const deck = document.querySelector('#desk');

      const deg = document.querySelector('#deg');
      const wind = document.querySelector('#wind');

      switch (json.weather[0].main) {
        case "Clear":
          img.src = "image/clear.png";
          break;

        case "Rain":
          img.src = "image/rain.png";
          break;

        case "Snow":
          img.src = "image/snow.png";
          break;

        case "Clouds":
          img.src = "image/clouds.png";
          break;

        case "Mist":
          img.src = "image/mist.png";
          break;

        case "Haze":
          img.src = "image/haza.png";
          break;

        default:
          image.src = "image/haza.png";
          break;
      }

      temptarutra.innerHTML = `${parseInt(json.main.temp)} <span>°С</span>`;
      deck.innerHTML =` ${json.weather[0].description}`;
      deg.innerHTML =` ${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });
});
