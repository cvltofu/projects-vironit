import { createHtmlForecast } from './createHtmlForecast.js'
import { createHtmlToday } from './createHtmlToday.js'

export class WeatherWidget {
    constructor(cityName, apiID, requestURL) {
        this.cityName = cityName
        this.apiID = apiID
        this.url = requestURL
        this.forecastURL =
            'https://api.openweathermap.org/data/2.5/onecall?lat=53.9&lon=27.5667&exclude=minutely,hourly&appid=cbef08d151a0723a1d9ce397ee7fbcf0&lang=ru'
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
            .then(() => {
                this.showWidget()
            })
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
                        this.setForecastData(result)
                        console.log(result)
                    })
                    .then(() => {
                        this.showForecast()
                    })
                    .catch((error) => {
                        console.log(error)
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
        this.image = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="image_0"/>`
    }

    setForecastData(data) {
        this.tempForecast = []
        this.weatherForecast = []
        this.windForecast = []
        this.imageForecast = []
        this.tempForecast[0] = `${Math.floor(
            data.daily[0].feels_like.day - 273.15
        )} &#8451`
        this.tempForecast[1] = `${Math.floor(
            data.daily[1].feels_like.day - 273.15
        )} &#8451`
        this.tempForecast[2] = `${Math.floor(
            data.daily[2].feels_like.day - 273.15
        )} &#8451`
        this.weatherForecast[0] = data.daily[0].weather[0].description
        this.weatherForecast[1] = data.daily[1].weather[0].description
        this.weatherForecast[2] = data.daily[2].weather[0].description
        this.windForecast[0] = `Ветер ${Math.floor(
            data.daily[0].wind_speed
        )} М/с`
        this.windForecast[1] = `Ветер ${Math.floor(
            data.daily[1].wind_speed
        )} М/с`
        this.windForecast[2] = `Ветер ${Math.floor(
            data.daily[2].wind_speed
        )} М/с`
        this.imageForecast[0] = `<img src="http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png" class="image_1"/>`
        this.imageForecast[1] = `<img src="http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png" class="image_2"/>`
        this.imageForecast[2] = `<img src="http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png" class="image_2"/>`
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

    addForecastData() {
        document.querySelector('.temp_1').innerHTML = this.tempForecast[0]
        document.querySelector('.temp_2').innerHTML = this.tempForecast[1]
        document.querySelector('.temp_3').innerHTML = this.tempForecast[2]
        document.querySelector('.weather_1').innerHTML = this.weatherForecast[0]
        document.querySelector('.weather_2').innerHTML = this.weatherForecast[1]
        document.querySelector('.weather_3').innerHTML = this.weatherForecast[2]
        document.querySelector('.wind_1').innerHTML = this.windForecast[0]
        document.querySelector('.wind_2').innerHTML = this.windForecast[1]
        document.querySelector('.wind_3').innerHTML = this.windForecast[2]
        document.querySelector(
            '.title_forecast_1'
        ).innerHTML = `Сегодня ${this.imageForecast[0]}`

        document.querySelector(
            '.title_forecast_2'
        ).innerHTML = `Завтра ${this.imageForecast[1]}`

        document.querySelector(
            '.title_forecast_3'
        ).innerHTML = `Послезавтра ${this.imageForecast[2]}`
    }

    showWidget() {
        document.querySelector('.show_button').addEventListener('click', () => {
            createHtmlToday()
            this.addTodayData()
            this.closeWidget()
            this.getForecast()
        })
    }

    closeWidget() {
        document
            .querySelector('.close_button')
            .addEventListener('click', () => {
                document.querySelector('body').innerHTML = `
                <style>
                    body {
                        background: #919191;
                        font-family: Montserrat, Arial, sans-serif;
                    }
                    .show_button {
                        margin: 20px 20px;
                        border-radius: 15px;
                        background-color: #707471;
                        border: none;
                        color: white;
                        padding: 5px 15px;
                        text-align: center;
                        text-decoration: none;
                        font-size: 16px;
                    }
                    .show_button:hover {
                        background-color: #6875c0;
                        color: white;
                    }
                </style>

                <input value="Посмотреть погоду" type="button" class="show_button" />`

                this.showWidget()
            })
    }

    showForecast() {
        createHtmlForecast()
        this.addForecastData()
        this.closeForecast()
    }

    closeForecast() {
        document
            .querySelector('.forecast_close_button')
            .addEventListener('click', () => {
                document.querySelector('.lower').innerHTML =
                    '<input value="Прогноз на 3 дня" type="button" class="forecast_button" />'

                document
                    .querySelector('.forecast_button')
                    .addEventListener('click', () => {
                        this.showForecast()
                    })
            })
    }
}
