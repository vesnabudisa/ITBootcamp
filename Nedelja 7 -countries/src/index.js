import Countries from "./components/Countries";
import { getAllCountries, AllInfo, GenerateSelectCapital} from "./service";
import {main,inputSearch,divPages} from "./constants.js"
import {GenerateSelect, GenerateSelectName} from "./service"





getAllCountries().then(res => {
    
    let countries = res.data
    console.log(countries)
    let firstPage = countries.splice(0,7)

    main.append(...Countries(firstPage))

    GenerateSelect(countries)
    GenerateSelectName(countries)
    GenerateSelectCapital(countries)

    inputSearch.addEventListener(`input`, () => {
        main.innerHTML = ``
        let searchCountry = countries.filter(country => country.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
        main.append(...Countries(searchCountry))

        AllInfo(searchCountry)
    })

    const btnFirstPage = document.createElement(`button`)
    btnFirstPage.textContent = 1

    btnFirstPage.addEventListener(`click`,() =>{
        main.innerHTML = ``
        main.append(...Countries(firstPage))
    })
    divPages.append(btnFirstPage)
    
    for (let i = 1; i < Math.ceil((countries.length) / 7); i++) {
        const btnPage = document.createElement(`button`)
        btnPage.textContent = i+1

        btnPage.addEventListener(`click`, () => {

            let page = countries.splice(countries.indexOf(countries[(i-1) * 7 + 7]), 7)
            main.innerHTML = ``
            main.append(...Countries(page))
        })

        divPages.append(btnPage)
    }
})



 





