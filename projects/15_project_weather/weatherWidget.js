import { createHtml } from './createHtml.js'

class WeatherWidget {
    constructor(cityName, apiID, requestURL) {
        this.cityName = cityName
        this.apiID = apiID
        this.url = requestURL
    }

    async getWeather() {
        //this.weather =
        await fetch(this.url)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setData(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    setData(data) {
        console.log(data)
        createHtml()

        document.querySelector('.date').innerHTML = new Date().getDay()
        document.querySelector('.year').innerHTML = new Date().getFullYear()
        document.querySelector('.place').innerHTML = data.name
        document.querySelector('.temp_update').innerHTML = `${Math.floor(
            data.main.feels_like - 273.15
        )} &#8451`
        document.querySelector('.weather_update').innerHTML =
            data.weather[0].main
        document.querySelector('.wind_update').innerHTML = `${Math.floor(
            data.wind.speed
        )} М/с`
        document.querySelector('.humidity_update').innerHTML =
            data.main.humidity
    }
}

const cityName = 'Minsk'
const apiID = 'cbef08d151a0723a1d9ce397ee7fbcf0'
const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiID}`

const weather = new WeatherWidget(cityName, apiID, requestURL).getWeather()
