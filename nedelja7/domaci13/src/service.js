
import axios from 'axios'
import { BASE, ALL, main } from './constants'
import { CountryExtra } from './components/Country'
import Countries from "./components/Countries"
import { divSelect, inputSearch } from './constants'

export const getAllCountries = () => axios.get(`${BASE}${ALL}`)

export const AllInfo = (arr) => {
    if (arr.length == 1) {
        CountryExtra(arr[0])
        main.innerHTML = ``
        main.append(CountryExtra(arr[0]))
    }
}

export const Select = (options, str) => {
    const select = document.createElement(`select`)

    const defOpt = document.createElement(`option`)
    defOpt.value = `-1`
    defOpt.selected = true
    defOpt.disabled = true
    defOpt.hidden = true
    defOpt.innerHTML = str

    select.append(defOpt)

    options.forEach(option => {
        const opt = document.createElement(`option`)
        opt.value = option
        opt.textContent = option

        select.append(opt)
    })

    return select
}

export const GenerateSelect = (arr) => {

    let options = new Set(arr.map(country => country.region == `` ? `Other` : country.region))

    divSelect.innerHTML = ``

    let select = Select(options, `Pretraga po regionu`)
    select.addEventListener(`change`, () => {

        let tmp = arr.filter(country => country.region.startsWith(select.value))
        main.innerHTML = ``
        main.append(...Countries(tmp))

        AllInfo(tmp)

        inputSearch.addEventListener(`input`, () => {
            main.innerHTML = ``
            let searchCountry = tmp.filter(country => country.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
            main.append(...Countries(searchCountry))

            AllInfo(searchCountry)
        })

        if (select.value == `Other`) {
            let OtherOpt = arr.filter(country => country.region == ``)
            main.innerHTML = ``
            main.append(...Countries(OtherOpt))

            inputSearch.addEventListener(`input`, () => {
                main.innerHTML = ``
                let searchCountry = OtherOpt.filter(country => country.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
                main.append(...Countries(searchCountry))

                AllInfo(searchCountry)
            })
        }
    })

    divSelect.append(select)
}

export const GenerateSelectName = (arr) => {

    let options = new Set(arr.map(country => country.name == `` ? `Other` : country.name))

    let selectName = Select(options, `Pretraga po nazivu drzave`)
    selectName.addEventListener(`change`, () => {

        let tmp = arr.filter(country => country.name.startsWith(selectName.value))
        main.innerHTML = ``
        main.append(...Countries(tmp))

        AllInfo(tmp)
    })

    divSelect.append(selectName)
}

export const GenerateSelectCapital = (arr) => {

    let options = new Set(arr.map(country => country.capital == `` ? `Other` : country.capital))

    let selectCapital = Select(options, `Pretraga po glavnom gradu`)
    selectCapital.addEventListener(`change`, () => {

        let tmp = arr.filter(country => country.capital.startsWith(selectCapital.value))
        main.innerHTML = ``
        main.append(...Countries(tmp))

        AllInfo(tmp)
    })

    divSelect.append(selectCapital)
}
