
const divRashodi = document.querySelector(`.rashodi`)
const konacanRashod = document.querySelector(`.ukupni-rashod`)
const budzet = document.querySelector(`.preostali-budzet`)

let prihodi = []
let rashodi = []

const deletePrihod = (prihod) => {
    prihodi.splice(prihodi.indexOf(prihod), 1)
}
const deleteRashod = (rashod) => {
    rashodi.splice(rashodi.indexOf(rashod), 1)
}

const procenat = (a, b) => a * 100 / b + ``

const ukupnaSuma = (transakcije) => {
    let sum = 0
    for (let i = 0; i < transakcije.length; i++) {
        sum += transakcije[i].iznos
    }
    return sum
}

const addToDomNoviRashod = (rashod) => {
    
    const divTransakcija = document.createElement(`div`)
    divTransakcija.className = `transakcija-rashod`
    const btnObrisi = document.createElement(`button`)
    btnObrisi.className = `obrisi`
    btnObrisi.innerHTML = `Obrisi`
    divTransakcija.innerHTML = `
    <p id="input-opis">${rashod.opis}</p>
    <p id="input-iznos">- ${rashod.iznos}
    <p id="procenat">${ukupnaSuma(prihodi) == 0 ?
            `` : procenat(rashod.iznos,ukupnaSuma(prihodi)).substring(0, 3) + `%`}`

    divRashodi.append(divTransakcija)

    btnObrisi.addEventListener(`click`, () => {
        divTransakcija.remove()
        deleteRashod(rashod)
        konacanRashod.innerHTML = `Ukupan rashod:   - ${ukupnaSuma(rashodi)} ${ukupnaSuma(prihodi) == 0 ?
            `` : (procenat(ukupnaSuma(rashodi), ukupnaSuma(prihodi))).substring(0, 3) + `%`}`
        budzet.innerHTML = `Preostali budzet:   ${ukupnaSuma(prihodi) - ukupnaSuma(rashodi)}`
        console.log(rashodi)
    })
    divTransakcija.append(btnObrisi,)
    divTransakcija.addEventListener(`mouseover`, () => {
        divTransakcija.lastChild.style.display = `inline-block`
    })
    divTransakcija.addEventListener(`mouseout`, () => {
        divTransakcija.lastChild.style.display = `none`
    })
    
}

export {
    prihodi,
    rashodi,
    deletePrihod,
    deleteRashod,
    procenat,
    ukupnaSuma,
    addToDomNoviRashod
}