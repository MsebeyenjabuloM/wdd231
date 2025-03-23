console.log("data.js is loaded!");


const apiKey = "2e30dcb81e7d0388b6159d9c1a070dd3";
const city = "Durban,ZA";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Weather Data:", data);
  })
  .catch(error => console.error("Error fetching weather data:", error));
