async function fetchWeatherData() {
    const apiKey = '2e30dcb81e7d0388b6159d9c1a070dd3';
    const city = 'Durban,ZA';

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Fetch current weather
        const currentWeatherResponse = await fetch(currentWeatherUrl);
        if (!currentWeatherResponse.ok) throw new Error("Failed to fetch current weather");

        const currentWeatherData = await currentWeatherResponse.json();
        console.log("Current Weather Data:", currentWeatherData);

        // Fetch forecast
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) throw new Error("Failed to fetch forecast");

        const forecastData = await forecastResponse.json();
        console.log("Forecast Data:", forecastData);

        // Ensure required properties exist
        if (!currentWeatherData.main || !forecastData.list) {
            throw new Error("Invalid API response structure");
        }

        // Update current weather section
        document.getElementById('current-temperature').textContent = `Temperature: ${currentWeatherData.main.temp}°C`;
        document.getElementById('current-condition').textContent = `Condition: ${currentWeatherData.weather[0].description}`;
        document.getElementById('current-wind').textContent = `Wind: ${currentWeatherData.wind.speed} km/h`;

        // Ensure forecast elements exist
        const forecastDay1 = document.getElementById('forecast-day1');
        const forecastDay2 = document.getElementById('forecast-day2');
        const forecastDay3 = document.getElementById('forecast-day3');

        if (!forecastDay1 || !forecastDay2 || !forecastDay3) {
            console.error("Forecast elements not found in the DOM");
            return;
        }

        // Extract 3-day forecast
        let forecastDays = {};
        const threeDayForecast = [];

        for (let i = 0; i < forecastData.list.length; i++) {
            let date = new Date(forecastData.list[i].dt_txt).toLocaleDateString();

            if (!forecastDays[date]) {
                forecastDays[date] = forecastData.list[i];
                threeDayForecast.push(forecastData.list[i]);
            }

            if (threeDayForecast.length === 3) break;
        }

        // Display 3-day forecast
        [forecastDay1, forecastDay2, forecastDay3].forEach((element, index) => {
            let day = threeDayForecast[index];
            let date = new Date(day.dt_txt).toLocaleDateString();
            element.textContent = `${date} - ${day.weather[0].description}, ${day.main.temp}°C`;
        });

    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('weather').textContent = "Weather data unavailable.";
    }
}

// Ensure function runs after DOM is loaded
document.addEventListener("DOMContentLoaded", fetchWeatherData);
