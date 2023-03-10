
import { Countries } from "./components/Countries.js";
import { getAllCountries } from "./service.js";
import { divCountries, btnBack } from "./constants"

let countries = []

getAllCountries().then(res => {
    
    for (let i = 0; i < 15; i++) {
        let randomCountry = res.data[[Math.floor(Math.random() * res.data.length)]]
        countries.push(randomCountry)
    }
    divCountries.append(...Countries(countries))

    btnBack.addEventListener(`click`,()=>{
        divCountries.innerHTML = ``
        divCountries.append(...Countries(countries))
    })
})

export {countries}








