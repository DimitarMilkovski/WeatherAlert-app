

function selectCityFromDropDown(getWeatherData, inputCity){
    let dynamicDropdownDivElements = document.getElementsByClassName('dropdown-item')
    Array.from(dynamicDropdownDivElements).forEach(element => {
        element.addEventListener ('click', ()=>{
            inputCity.value = element.innerText
            getWeatherData(inputCity)
            clearDynamicDropDown();
        })
    })

}


function dynamicDropDown (cityObjectsArray){
    clearDynamicDropDown()
    let dynamicDropdownDiv = document.createElement('div')
    dynamicDropdownDiv.classList.add ('dropdown-menu','show', 'overflow-auto')
    dropdownWrapper.appendChild(dynamicDropdownDiv)
    
    if (cityObjectsArray != undefined && cityObjectsArray !=[]){
        
        for (let i = 0; i< cityObjectsArray.length; i++){
            if(i>=6){
                break;
            }
            dynamicDropdownDiv.innerHTML += `
            <a class="dropdown-item" href="#">${cityObjectsArray[i].name}</a>
            `
            
        }
    }
    if (inputCity.value === '' || cityObjectsArray.length === 0 ){
        clearDynamicDropDown()
    }

    

}

let clearDynamicDropDown = () => dropdownWrapper.innerHTML = '';

export {selectCityFromDropDown, dynamicDropDown, clearDynamicDropDown}