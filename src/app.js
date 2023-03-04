import {showStatistics} from './statisticPage.js'
import { fillHourlyWeather } from './hourlyPage.js'
import {selectCityFromDropDown, dynamicDropDown, clearDynamicDropDown} from './dynamicDropdown.js'
import {tempHumMinMaxAvg} from './minMaxAvg.js'


console.log('connected')

let mainHeader = document.querySelector('#mainHeader')
let whichCity = document.querySelector('#whichCity')
let statisticsButton = document.querySelector('#statisticsNav')
let hourlyButton = document.querySelector('#hourlyNav')
let aboutButton = document.querySelector('#aboutNav')
let submitCityButton = document.querySelector('#submitCityButton')
let inputCity = document.querySelector('#inputCity')
let dropdownWrapper = document.querySelector('#dropdownWrapper')

let pageWeather = document.querySelector('#pageWeather')
let pageHourly = document.querySelector('#pageHourly')
let pageAbout = document.querySelector('#pageAbout') 
let homeIcon = document.querySelector('#homeIcon')




pageHourly.classList.add("collapse")
pageAbout.classList.add("collapse")


window.addEventListener ('click', ()=>{
    clearDynamicDropDown()
})

statisticsButton.addEventListener ('click', () => {
    selectTab (pageWeather)
})

hourlyButton.addEventListener ('click', () => {
    selectTab(pageHourly)
})

aboutButton.addEventListener ('click', () => {
    selectTab (pageAbout)
})

homeIcon.addEventListener ('click', () => {
    selectTab (pageWeather)
})

submitCityButton.addEventListener ('click', ()=>{
    getWeatherData(inputCity)
    clearDynamicDropDown()
})

inputCity.addEventListener("keyup", waitUserInput(() => {
    fetch('src/myJson.json')
        .then(res => res.json())
        .then(data => {
            let cityObjectsArray = data.filter(places => places.name.toLowerCase().includes(inputCity.value.toLowerCase()));
            dynamicDropDown(cityObjectsArray)
            selectCityFromDropDown(getWeatherData, inputCity)
            
        })
}, 500));

inputCity.addEventListener('click', () =>{
    fetch('src/myJson.json')
        .then(res => res.json())
        .then(data => {
            let cityObjectsArray = data.filter(places => places.name.toLowerCase().includes(inputCity.value.toLowerCase()));
            dynamicDropDown(cityObjectsArray)
            selectCityFromDropDown(getWeatherData, inputCity)
        })
})

inputCity.addEventListener('keypress', e =>{
    if (e.key ==='Enter'){
        getWeatherData(inputCity)
        clearDynamicDropDown()
    }
    
})

function waitUserInput(callback, timeoutMsTime) {
    let timerId = null;

    return () => {
        if (timerId)
            clearTimeout(timerId);

        timerId = setTimeout(() => {
            callback();
        }, timeoutMsTime || 0);
    };
}



function selectTab (pageName) {

    pageWeather.classList.add("collapse")
    pageHourly.classList.add("collapse")
    pageAbout.classList.add("collapse")
    statisticsButton.classList.remove ('active')
    hourlyButton.classList.remove ('active')
    aboutButton.classList.remove ('active')

    switch (pageName){
        case pageWeather:
            statisticsButton.classList.add ('active')
            pageWeather.classList.remove ('collapse')
            break;
            
        case pageHourly:
            hourlyButton.classList.add ('active')
            pageHourly.classList.remove('collapse')
            break;
        case pageAbout:
            aboutButton.classList.add ('active')
            pageAbout.classList.remove ('collapse')
            break;
    }

}

function getWeatherData (inputCity){
    let weatherStatistic = {}
    let baseUrl = 'http://api.openweathermap.org/data/2.5/forecast'
    let apiKey = '61cb221a81d6a968f52738d31369683b'
    let url = `${baseUrl}?q=${inputCity.value}&units=metric&APPID=${apiKey}`
    fetch (url)
    .then (response => response.json())
    .then (data => {
        fillHourlyWeather(data)
        tempHumMinMaxAvg (data, weatherStatistic, inputCity.value)
        showStatistics(weatherStatistic)
        
    })
    .catch (error => console.log ('ERROR: ', error))
}






