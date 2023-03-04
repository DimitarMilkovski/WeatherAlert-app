function tempHumMinMaxAvg (data,object,inputCity){
    let temperatureMin = data.list[0].main.temp
    let temperatureMax =data.list[0].main.temp
    let temperatureSum = 0;
    let humidityMin = data.list[0].main.humidity
    let humidityMax = data.list[0].main.humidity
    let humiditySum = 0;
    let dateTimeMaxTemp = data.list[0].dt_txt
    let dateTimeMinTemp = data.list[0].dt_txt

    data.list.forEach(element => {
        if (element.main.temp<temperatureMin) {
            temperatureMin = element.main.temp
            dateTimeMinTemp = new Date (element.dt_txt)

        } 
        if (element.main.temp>temperatureMax){
            temperatureMax = element.main.temp
            dateTimeMaxTemp = new Date (element.dt_txt)

        }
        if (element.main.humidity<humidityMin) {
            humidityMin = element.main.humidity
        } 
        if (element.main.humidity>humidityMax){
            humidityMax = element.main.humidity
        }
        temperatureSum += element.main.temp
        humiditySum +=element.main.humidity

    })
    let temperatureAvg = temperatureSum/data.list.length
    let humidityAvg = humiditySum/data.list.length
    object.name = inputCity
    object.temperatureMin = temperatureMin
    object.temperatureMax = temperatureMax
    object.temperatureAvg = temperatureAvg
    object.humidityMin = humidityMin
    object.humidityMax = humidityMax
    object.humidityAvg = humidityAvg
    object.dateTimeMaxTemp = dateTimeMaxTemp
    object.dateTimeMinTemp = dateTimeMinTemp
}

export {tempHumMinMaxAvg}