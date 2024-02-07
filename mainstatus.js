import './style.css'
import { loadFooter,loadHeader} from './script/modulestatus.js'
const API_KEY = '15afb914adc211c491651741ae88beb9';
function getWeatherForecast() {
    const city = "Quezon City";
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const forecasts = data.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));

            forecasts.forEach((forecast, index) => {
                const date = new Date(forecast.dt * 1000);
                const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
                const weatherDescription = forecast.weather[0].description;
                const temperature = forecast.main.temp;
                const humidity = forecast.main.humidity;
                const windSpeed = forecast.wind.speed;

                // Create card elements
                const card = document.createElement('div');
                card.classList.add('card');
                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');
                const cardTitle = document.createElement('span');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = `Weather forecast for ${dayOfWeek}:`;
                const weatherInfo = document.createElement('p');
                weatherInfo.textContent = `Weather: ${weatherDescription}\nTemperature: ${temperature}°C\nHumidity: ${humidity}%\nWind Speed: ${windSpeed} m/s`;

                // Append elements to the DOM
                cardContent.appendChild(cardTitle);
                cardContent.appendChild(weatherInfo);
                card.appendChild(cardContent);
                document.body.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching weather forecast:', error);
        });
}

// Example usage
getWeatherForecast();


loadFooter();
loadHeader();