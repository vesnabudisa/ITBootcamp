const divCountries = document.querySelector(`#app`)

const BASE = `https://restcountries.eu/rest/v2`
const ALL = `/all`


const divBtn = document.createElement(`div`)

const btnBack = document.createElement(`button`)
btnBack.textContent = `BACK`

const btnPreview = document.createElement(`button`)
btnPreview.textContent = `PREVIEW`

const btnNext = document.createElement(`button`)
btnNext.textContent = `NEXT`

divBtn.append(btnBack, btnPreview,btnNext)

export {BASE, ALL, divCountries, divBtn, btnBack,btnPreview, btnNext}