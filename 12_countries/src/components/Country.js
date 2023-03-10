import { divCountries } from "../constants"
import { divBtn, btnPreview, btnNext } from "../constants"
import { Countries} from "./Countries"
import { countries } from "../index"


const CountryExtra = (country) => {
    const divCountryExtra = document.createElement(`div`)

    const name = document.createElement(`p`)
    name.textContent = country.name

    const img = document.createElement(`img`)
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    const capital = document.createElement(`p`)
    capital.innerHTML = `Capital: ${country.capital}`

    const languages = document.createElement(`ol`)
    languages.innerHTML = `Languages:`

    country.languages.forEach(el => {
        const language = document.createElement(`li`)
        language.innerHTML = `${el.name}`
        languages.append(language)
    })

    const timezones = document.createElement(`ul`)
    timezones.innerHTML = `Timezones:`

    country.timezones.forEach(zone => {
        const timezone = document.createElement(`li`)
        timezone.innerHTML = `${zone}`
        timezones.append(timezone)
    })

    const population = document.createElement(`p`)
    population.innerHTML = `Population: ${country.population}`

    divCountryExtra.append(img, name, capital, languages, timezones, population)

    btnPreview.addEventListener(`click`, () => {
        divCountries.innerHTML = ``
        console.log(countries)
        let index = countries.findIndex(c => c.name == country.name)
        console.log(index)
        if (index > 0) {
            divCountries.append(CountryExtra(countries[index - 1]), divBtn)
        }else{
            divCountries.append(...Countries(countries))
        }
    })

    btnNext.addEventListener(`click`, () => {
        divCountries.innerHTML = ``
        console.log(countries)
        let index = countries.findIndex(c => c.name == country.name)
        console.log(index)
        if (index < 14) {
            divCountries.append(CountryExtra(countries[index + 1]), divBtn)
        }else{
            divCountries.append(...Countries(countries))
        }
    })

    return divCountryExtra
}

const Country = (country) => {
    const divCountry = document.createElement(`div`)
    divCountry.className = `country`
    const name = document.createElement(`p`)
    name.textContent = country.name

    const img = document.createElement(`img`)
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    img.addEventListener(`click`, () => {
        divCountries.innerHTML = ``
        divCountries.append(CountryExtra(country), divBtn)
    })

    const capital = document.createElement(`p`)
    capital.innerHTML = `Capital: ${country.capital}`

    divCountry.append(img, name, capital)

    return divCountry
}

export { Country, CountryExtra }
