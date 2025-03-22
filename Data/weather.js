// Replace with your OpenWeatherMap API key
const apiKey = '2e30dcb81e7d0388b6159d9c1a070dd3';
const city = 'Durban,ZA';  // Durban, South Africa (ZA is the country code)

async function fetchWeatherData() {
    // Fetch current weather data
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Fetch current weather data
        const currentWeatherResponse = await fetch(currentWeatherUrl);
        const currentWeatherData = await currentWeatherResponse.json();
        console.log(currentWeatherData);  // Debug: Check if data is fetched properly
        
        // Fetch 3-day forecast data
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        console.log(forecastData);  // Debug: Check if forecast data is fetched properly
        
        // Extract current weather data
        const currentTemperature = currentWeatherData.main.temp;
        const currentWeatherDescription = currentWeatherData.weather[0].description;
        const currentWindSpeed = currentWeatherData.wind.speed;
        
        // Extract 3-day forecast data
        const forecast = forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 3);

        // Update the weather section with actual data
        document.getElementById('current-temperature').textContent = `Temperature: ${currentTemperature}°C`;
        document.getElementById('current-condition').textContent = `Condition: ${currentWeatherDescription}`;
        document.getElementById('current-wind').textContent = `Wind: ${currentWindSpeed} km/h`;

        // Update the forecast section with 3-day data
        const forecastContainer = document.querySelector('.forecast-card');
        forecastContainer.innerHTML = "<h3>3-Day Forecast</h3>";
        forecast.forEach((day, index) => {
            const dayOfWeek = new Date(day.dt_txt).toLocaleString('en-US', { weekday: 'short' });
            const dayTemp = day.main.temp;
            const dayDescription = day.weather[0].description;
            const wind = day.wind.speed;

            document.getElementById(`forecast-day${index + 1}`).textContent = 
                `${dayOfWeek}: ${dayDescription}, ${dayTemp}°C, Wind: ${wind} km/h`;
        });
    } catch (error) {
        console.error("Error fetching weather data: ", error);
    }
}
