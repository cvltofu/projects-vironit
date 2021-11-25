export function createHtml() {
    document.querySelector('body').innerHTML = `<div class="widget">
    <div class="upper">
        <div class="date">Loading</div>
        <div class="year">Loading</div>
        <div class="place">Loading</div>
    </div>
    <div class="lower">
        <ul class="infos">
            <li class="info_temp">
                <h2 class="title">TEMPERATURE</h2>
                <span class="temp_update">Loading</span>
            </li>
            <li class="info_weather">
                <h2 class="title">WEATHER</h2>
                <span class="weather_update">Loading</span>
            </li>
            <li class="info_wind">
                <h2 class="title">WIND</h2>
                <span class="wind_update">Loading</span>
            </li>
            <li class="info_humidity">
                <h2 class="title">HUMIDITY</h2>
                <span class="humidity_update">Loading</span>
            </li>
        </ul>
    </div>
</div>`
}
