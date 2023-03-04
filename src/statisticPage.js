function showStatistics (object){
    statisticDiv.innerHTML =''
    whichCity.innerText = ''

    whichCity.innerText = `City: ${object.name.charAt(0).toUpperCase()+object.name.slice(1)}`

    let coldestTempDiv = document.createElement ('div')
    coldestTempDiv.setAttribute ('class','card ')
    let coldestTempDivBody = document.createElement ('div')
    coldestTempDivBody.setAttribute ('class','card-body')
    let coldestTempDivBodyH5 = document.createElement ('h5')
    coldestTempDivBodyH5.setAttribute('class','card-title text-center')
    coldestTempDivBodyH5.innerText = `Lowest Temperature: ${object.temperatureMin.toFixed(1) + String.fromCharCode('0x00B0') + 'C'}`
    let coldestTempDivBodyH6DateTime = document.createElement ('h6')
    coldestTempDivBodyH6DateTime.setAttribute('class','card-title text-center')
    coldestTempDivBodyH6DateTime.innerText = `on: ${new Intl.DateTimeFormat('en-GB', {hour: 'numeric', minute:'numeric', day: 'numeric',month: 'numeric',year: 'numeric'}).format(object.dateTimeMinTemp)}h`
    

    let warmestTempDiv = document.createElement ('div')
    warmestTempDiv.setAttribute ('class','card ')
    let warmestTempDivBody = document.createElement ('div')
    warmestTempDivBody.setAttribute ('class','card-body')
    let warmestTempDivBodyH5 = document.createElement ('h5')
    warmestTempDivBodyH5.setAttribute('class','card-title text-center')
    warmestTempDivBodyH5.innerText = `Highest Temperature: ${object.temperatureMax.toFixed(1) + String.fromCharCode('0x00B0') + 'C'}`
    let warmestTempDivBodyH6DateTime = document.createElement ('h6')
    warmestTempDivBodyH6DateTime.setAttribute('class','card-title text-center')
    warmestTempDivBodyH6DateTime.innerText = `on: ${new Intl.DateTimeFormat('en-GB', {hour: 'numeric', minute:'numeric', day: 'numeric',month: 'numeric',year: 'numeric'}).format(object.dateTimeMaxTemp)}h`


    let humidityDiv = document.createElement ('div')
    humidityDiv.setAttribute ('class','card ')
    let humidityDivBody = document.createElement ('div')
    humidityDivBody.setAttribute ('class','card-body')
    let  humidityMinDivBodyH5 = document.createElement ('h5')
    humidityMinDivBodyH5.setAttribute('class','card-title text-center')
    humidityMinDivBodyH5.innerText = `Minimal Humidity: ${object.humidityMin.toFixed(0)}%`
    let  humidityMaxDivBodyH5 = document.createElement ('h5')
    humidityMaxDivBodyH5.setAttribute('class','card-title text-center')
    humidityMaxDivBodyH5.innerText = `Maximal Humidity: ${object.humidityMax.toFixed(0)}%`
    let  humidityAvgDivBodyH6 = document.createElement ('h6')
    humidityAvgDivBodyH6.setAttribute('class','card-title text-center')
    humidityAvgDivBodyH6.innerText = `Average Humidity: ${object.humidityAvg.toFixed(0)}%`


    let averagesDiv = document.createElement ('div')
    averagesDiv.setAttribute ('class','card ')
    let averagesDivBody = document.createElement ('div')
    averagesDivBody.setAttribute ('class','card-body')
    let  averagesDivBodyH5 = document.createElement ('h5')
    averagesDivBodyH5.setAttribute('class','card-title text-center')
    averagesDivBodyH5.innerText = `Average Temperature: ${object.temperatureAvg.toFixed(1)+ String.fromCharCode('0x00B0') + 'C'}`

    
    let maxTempImg = document.createElement('img')
    let minTempImg = document.createElement('img')
    let humidityImg = document.createElement('img')
    let averagesImg = document.createElement('img')


    let statisticDivFooter =  document.createElement ('footer')
    statisticDivFooter.setAttribute ('class','page-footer font-small text-secondary text-center text-lg-center fixed-bottom pb-5')
    let time = new Date ();
    statisticDivFooter.innerText = `Last updated: ${ time.getHours()+":"+ time.getMinutes()}h`


    maxTempImg.setAttribute('src', './src/img/maxTempImage.png')
    minTempImg.setAttribute('src','./src/img/minTempImage.png')
    humidityImg.setAttribute('src','./src/img/humidityImage.png')
    averagesImg.setAttribute('src','./src/img/averagesImage.png')

    maxTempImg.setAttribute('class', 'imgSize mx-auto d-block')
    minTempImg.setAttribute('class','imgSize mx-auto d-block')
    humidityImg.setAttribute('class', 'imgSize mx-auto d-block')
    averagesImg.setAttribute('class','imgSize mx-auto d-block')


    statisticDiv.appendChild(coldestTempDiv)
    statisticDiv.appendChild(warmestTempDiv)
    statisticDiv.appendChild(humidityDiv)
    statisticDiv.appendChild(averagesDiv)

    coldestTempDiv.appendChild(minTempImg)
    coldestTempDiv.appendChild(coldestTempDivBody)
    coldestTempDivBody.appendChild(coldestTempDivBodyH5)
    coldestTempDivBody.appendChild(coldestTempDivBodyH6DateTime)
   
     
    warmestTempDiv.appendChild(maxTempImg)
    warmestTempDiv.appendChild(warmestTempDivBody)
    warmestTempDivBody.appendChild(warmestTempDivBodyH5)
    warmestTempDivBody.appendChild(warmestTempDivBodyH6DateTime)
  
    
    humidityDiv.appendChild(humidityImg)
    humidityDiv.appendChild(humidityDivBody)
    humidityDivBody.appendChild(humidityMaxDivBodyH5)
    humidityDivBody.appendChild(humidityAvgDivBodyH6)
    humidityDivBody.appendChild(humidityMinDivBodyH5)


    averagesDiv.appendChild(averagesImg)
    averagesDiv.appendChild(averagesDivBody)
    averagesDivBody.appendChild(averagesDivBodyH5)

    statisticDiv.appendChild(statisticDivFooter)

    mainHeader.appendChild(whichCity)

   
}

export {showStatistics};

