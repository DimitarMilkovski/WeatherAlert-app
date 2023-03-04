function fillHourlyWeather (data){
    pageHourly.innerHTML = ' <h1>Hourly Data</h1>'
    let table = document.createElement ('table')
    pageHourly.appendChild(table);
    
    let tableHeader = document.createElement('thead')
    let tableBody = document.createElement('tbody')
    table.appendChild(tableHeader);
    table.appendChild(tableBody);

    let headerRow = document.createElement ('tr')
    tableHeader.appendChild(headerRow)
    let headerArray = ['Date and Time','Icon Of Weather','Description of Weather','Temperature','Humidity','Wind Speed']
    table.classList.add ('table', 'table-striped', 'table-dark', 'table-responsive')
    for (let i=0; i<headerArray.length;i++ ){
        let headerData = document.createElement ('th')
        headerData.innerText = headerArray[i]
        headerRow.appendChild(headerData)
    }
    data.list.forEach(element => {    
            let newRow = document.createElement('tr')
            tableBody.appendChild(newRow)
            let dateAndTime = document.createElement('td')
            let icon = document.createElement('td')
            let weatherDescription = document.createElement('td')
            let temperature = document.createElement('td')
            let humidity = document.createElement('td')
            let windSpeed = document.createElement('td')
            
            let dateTimeFromApi = new Date (element.dt_txt)
            let newDateTimeFormat = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute:'numeric'}).format(dateTimeFromApi);
            dateAndTime.innerText = (newDateTimeFormat);

            let iconUrl = `http://openweathermap.org/img/w/${element.weather[0].icon}.png`
            let iconImage = document.createElement('img')
            iconImage.setAttribute ('src', iconUrl)
            icon.appendChild(iconImage)

            weatherDescription.innerText = element.weather[0].description
            temperature.innerText = element.main.temp.toFixed(1) + String.fromCharCode('0x00B0') + 'C'
            humidity.innerText = element.main.humidity + '%'
            windSpeed.innerText = element.wind.speed + ' km/h'

            newRow.appendChild(dateAndTime)
            newRow.appendChild(icon)   
            newRow.appendChild(weatherDescription) 
            newRow.appendChild(temperature)
            newRow.appendChild(humidity)
            newRow.appendChild(windSpeed)    
    })

}

 export {fillHourlyWeather}