import { createHtml } from './createHtml.js'

export class WeatherWidget {
    constructor(cityName, apiID, requestURL) {
        this.cityName = cityName
        this.apiID = apiID
        this.url = requestURL
        this.forecastURL =
            'https://api.openweathermap.org/data/2.5/onecall?lat=53.9&lon=27.5667&exclude=minutely,hourly&appid=cbef08d151a0723a1d9ce397ee7fbcf0'
        this.monthTitles = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря',
        ]
    }

    async getWeather() {
        await fetch(this.url)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setTodayData(result)
            })
            .then(() => this.showWidget())
            .catch((error) => {
                console.log(error)
            })
    }

    async getForecast() {
        document
            .querySelector('.forecast_button')
            .addEventListener('click', () => {
                fetch(this.forecastURL)
                    .then((response) => {
                        return response.json()
                    })
                    .then((result) => {
                        this.setForecastData()
                        console.log(result)
                    })
                    .then(() => {
                        this.showForecast()
                    })
            })
    }

    setTodayData(data) {
        console.log(data)

        this.date = new Date().getDate()
        this.month = this.monthTitles[new Date().getMonth()]
        this.year = new Date().getFullYear()
        this.place = data.name
        this.temp = `${Math.floor(data.main.feels_like - 273.15)} &#8451`
        this.weather = data.weather[0].description
        this.wind = `${Math.floor(data.wind.speed)} М/с`
        this.humidity = `${data.main.humidity}%`
        this.image = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="image"/>`
    }

    setForecastData() {
        console.log(this.dateForecast)
    }

    addTodayData() {
        document.querySelector('.date').innerHTML = `${this.date} ${this.month}`
        document.querySelector('.year').innerHTML = this.year
        document.querySelector('.place').innerHTML = this.place
        document.querySelector('.temp_update').innerHTML = this.temp
        document.querySelector('.weather_update').innerHTML = this.weather
        document.querySelector('.wind_update').innerHTML = this.wind
        document.querySelector('.humidity_update').innerHTML = this.humidity
        document.querySelector('.image_insert').innerHTML = this.image
    }

    addForecastData() {}

    showWidget() {
        document.querySelector('.show_button').addEventListener('click', () => {
            createHtml()
            this.addTodayData()
            this.closeWidget()
            this.getForecast()
        })
    }

    closeWidget() {
        document
            .querySelector('.close_button')
            .addEventListener('click', () => {
                document.querySelector(
                    'body'
                ).innerHTML = `<input value="Посмотреть погоду" type="button" class="show_button" />`
                this.showWidget()
            })
    }

    showForecast() {
        document.querySelector('.lower').innerHTML = `
        <input value="Закрыть прогноз" type="button" class="forecast_close_button" />

        <ul class="forecast">
            <li class="today">Loading</li>
            <li class="tomorrow">Loading</li>
            <li class="day_after">Loading</li>
        </ul>`
    }
}
