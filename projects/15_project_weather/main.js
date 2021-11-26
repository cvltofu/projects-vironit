import { WeatherWidget } from './weatherWidget.js'

const lang = 'ru'
const cityName = 'Minsk'
const apiID = 'cbef08d151a0723a1d9ce397ee7fbcf0'
const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiID}&lang=${lang}`

const weather = new WeatherWidget(cityName, apiID, requestURL).getWeather()
