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

        // Extract weather info
        document.getElementById('current-temperature').textContent = `Temperature: ${currentWeatherData.main.temp}°C`;
        document.getElementById('current-condition').textContent = `Condition: ${currentWeatherData.weather[0].description}`;
        document.getElementById('current-wind').textContent = `Wind: ${currentWeatherData.wind.speed} km/h`;

        // Update 3-day forecast
        const forecastContainer = document.querySelector('.forecast-card');
        forecastContainer.innerHTML = "<h3>3-Day Forecast</h3>";
        const forecast = forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 3);

        forecast.forEach((day, index) => {
            const date = new Date(day.dt_txt);
            document.getElementById(`forecast-day${index + 1}`).textContent = 
                `${date.toLocaleDateString()} - ${day.weather[0].description}, ${day.main.temp}°C`;
        });
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('weather').textContent = "Weather data unavailable.";
    }
}

// Run function on load
document.addEventListener("DOMContentLoaded", fetchWeatherData);
