
const Country = (country) => {
    const divCountry = document.createElement('div')

    const p = document.createElement('p')
    p.textContent = country.name

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    divCountry.append(p, img, document.createElement('hr'))

    return divCountry
}


const CountryExtra = (country) => {
    const divCountryExtra = document.createElement('div')

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    const name = document.createElement('p')
    name.innerHTML = `Name: ${country.name}`

    const nativeName = document.createElement('p')
    nativeName.innerHTML = `Native name: ${country.nativeName == `` ? `No information available` : country.nativeName}`

    const population = document.createElement('p')
    population.innerHTML = `Population: ${country.population == `` ? `No information available` : country.population}`

    const capital = document.createElement('p')
    capital.innerHTML = `Capital: ${country.capital == `` ? `No information available` : country.capital}`

    const topLevelDomain = document.createElement('p')
    topLevelDomain.innerHTML = `Top level domain: ${country.topLevelDomain == `` ? `No information available` : country.topLevelDomain}`



    divCountryExtra.append(document.createElement(`hr`),img, name, nativeName, capital, population, topLevelDomain)

    return divCountryExtra
}



export {Country, CountryExtra}