const main = document.querySelector('main')
const divSelect = document.querySelector(`#select`)
const inputSearch = document.querySelector(`#input-search`)
const divPages = document.querySelector(`#pages`)

const BASE = 'https://restcountries.eu/rest/v2'
const ALL = '/all'

export { BASE, ALL, main, divSelect, inputSearch, divPages }