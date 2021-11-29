export function createHtmlForecast() {
    document.querySelector('.lower').innerHTML = `
                <input value="Закрыть прогноз" type="button" class="forecast_close_button" />

                <ul class="forecast">
                    <li class="today">
                        <h2 class="title_forecast_1"></h2>
                        <span class="temp_1">Loading</span>
                        <span class="weather_1">Loading</span>
                        <span class="wind_1">Loading</span>
                    </li>
                    <li class="tomorrow">
                        <h2 class="title_forecast_2"></h2>
                        <span class="temp_2">Loading</span>
                        <span class="weather_2">Loading</span>
                        <span class="wind_2">Loading</span>
                    </li>
                    <li class="day_after">
                        <h2 class="title_forecast_3"></h2>
                        <span class="temp_3">Loading</span>
                        <span class="weather_3">Loading</span>
                        <span class="wind_3">Loading</span>
                    </li>
                </ul>`
}
