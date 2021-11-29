export function createHtml() {
    document.querySelector('body').innerHTML = `
    <style>
    
    </style>

    <div class="widget">
        <div class="upper">
            <input value="x" type="button" class="close_button" />

            <div class="date">Loading</div>
            <div class="year">Loading</div>
            <div class="place">Loading</div>

            <div class="image_insert"></div>

            <ul class="infos_1">
                <li class="info_temp">
                    <span class="temp_update">Loading</span>
                </li>
                <li class="info_weather">
                    <span class="weather_update">Loading</span>
                </li>
            </ul>

            <ul class="infos_2">
                <li class="info_wind">
                    <h2 class="title">Ветер</h2>
                    <span class="wind_update">Loading</span>
                </li>
                <li class="info_humidity">
                    <h2 class="title">Влажность</h2>
                    <span class="humidity_update">Loading</span>
                </li>
            </ul>
 
        </div>

        <div class="lower">
            <input value="Прогноз на 3 дня" type="button" class="forecast_button" />          
        </div>

        
    </div>`
}
