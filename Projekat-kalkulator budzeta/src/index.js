
import {
    prihodi,
    rashodi,
    deletePrihod,
    deleteRashod,
    procenat,
    ukupnaSuma,
    addToDomNoviRashod
} from "./service.js"

const inputOpis = document.querySelector(`#opis`)
const inputIznos = document.querySelector(`#iznos`)
const inputTip = document.querySelector(`.tip`)

const forma = document.querySelector(`form`)

const divPrihodi = document.querySelector(`.prihodi`)
const divRashodi = document.querySelector(`.rashodi`)

const konacanPrihod = document.querySelector(`.ukupni-prihod`)
const konacanRashod = document.querySelector(`.ukupni-rashod`)
const budzet = document.querySelector(`.preostali-budzet`)

const divOpis = document.querySelector(`.input-opis`)
const divIznos = document.querySelector(`.input-iznos`)
const divTip = document.querySelector(`.select-tip`)

const errorOpis = document.createElement(`label`)
errorOpis.className = `error`
const errorIznos = document.createElement(`label`)
errorIznos.className = `error`
const errorTip = document.createElement(`label`)
errorTip.className = `error`

const lRashodi = document.createElement(`label`)
lRashodi.className = `rashodi-label`
lRashodi.innerHTML = `RASHODI`


forma.addEventListener(`submit`, (event) => {
    event.preventDefault()

    const divTransakcija = document.createElement(`div`)
    const btnObrisi = document.createElement(`button`)
    btnObrisi.className = `obrisi`
    btnObrisi.innerHTML = `Obrisi`

    if (inputTip.value == 0) {
        errorTip.innerHTML = `<br>Potrebno je da izaberete tip transakcije`
        divTip.appendChild(errorTip)
        errorOpis.innerHTML = ``
        errorIznos.innerHTML = ``
    } else {
        if (inputIznos.value <= 0) {
            errorIznos.innerHTML = `<br>Iznos mora biti pozitivna vrednost`
            divIznos.appendChild(errorIznos)
        }
        if(inputIznos.value ==``){
            errorIznos.innerHTML = `<br>Potrebno je da unesete opis transakcije`
            divOpis.appendChild(errorIznos)
        }
        if (inputOpis.value == `` && inputIznos.value > 0) {
            errorOpis.innerHTML = `<br>Potrebno je da unesete opis transakcije`
            errorIznos.innerHTML = ``
            divOpis.appendChild(errorOpis)
        }
        if (inputIznos.value <= 0 && inputOpis.value !== ``) {
            errorIznos.innerHTML = `<br>Iznos mora biti pozitivna vrednost`
            errorOpis.innerHTML = ``
            divIznos.appendChild(errorIznos)
        }
    }

    if (inputTip.value == 1) {

        errorTip.innerHTML = ``

        let prihod = { opis: inputOpis.value.trim(), iznos: Number(inputIznos.value) }

        divTransakcija.innerHTML = `
        <p id="input-opis">${inputOpis.value}</p>
        <p id="input-iznos">+ ${inputIznos.value}`

        divTransakcija.className = `transakcija-prihod`

        btnObrisi.addEventListener(`click`, () => {
            divTransakcija.remove()
            deletePrihod(prihod)
            konacanPrihod.innerHTML = `Ukupan prihod:   + ${ukupnaSuma(prihodi)}`
            konacanRashod.innerHTML = `Ukupan rashod:   - ${ukupnaSuma(rashodi)} ${ukupnaSuma(prihodi) == 0 ?
                `` : (procenat(ukupnaSuma(rashodi), ukupnaSuma(prihodi))).substring(0, 3) + `%`}`
            budzet.innerHTML = `Preostali budzet:   ${ukupnaSuma(prihodi) - ukupnaSuma(rashodi)}`
            if (rashodi != []) {
                divRashodi.innerHTML = ``
                divRashodi.append(lRashodi)
                rashodi.forEach(rashod => addToDomNoviRashod(rashod))
                rashodi.forEach(rashod => rashod.procenat = procenat(rashod.iznos, ukupnaSuma(prihodi)).substring(0, 3) + `%`)
            }
        })
        divTransakcija.append(btnObrisi)

        divTransakcija.addEventListener(`mouseover`, () => {
            divTransakcija.lastChild.style.display = `inline-block`
        })
        divTransakcija.addEventListener(`mouseout`, () => {
            divTransakcija.lastChild.style.display = `none`
        })

        if (prihod.opis !== `` && prihod.iznos > 0) {
            errorOpis.textContent = ``
            errorIznos.textContent = ``
            inputTip.value = `0`
            prihodi.push(prihod)
            divPrihodi.append(divTransakcija)
            if (rashodi != []) {
                divRashodi.innerHTML = ``
                divRashodi.append(lRashodi)
                rashodi.forEach(rashod => addToDomNoviRashod(rashod))
                rashodi.forEach(rashod => rashod.procenat = procenat(rashod.iznos, ukupnaSuma(prihodi)).substring(0, 3) + `%`)
            }
        }
    }

    if (inputTip.value == 2) {

        errorTip.innerHTML = ``

        let rashod = { opis: inputOpis.value.trim(), iznos: Number(inputIznos.value), procenat: (procenat(Number(inputIznos.value), ukupnaSuma(prihodi))).substring(0, 3) + `%` }

        divTransakcija.innerHTML = `
        <p id="input-opis">${rashod.opis}</p>
        <p id="input-iznos">- ${rashod.iznos}
        <p id="procenat">${ukupnaSuma(prihodi) == 0 ?
                `` : rashod.procenat}`

        divTransakcija.className = `transakcija-rashod`

        btnObrisi.addEventListener(`click`, () => {
            divTransakcija.remove()
            deleteRashod(rashod)
            konacanRashod.innerHTML = `Ukupan rashod:   - ${ukupnaSuma(rashodi)} ${ukupnaSuma(prihodi) == 0 ?
                `` : (procenat(ukupnaSuma(rashodi), ukupnaSuma(prihodi))).substring(0, 3) + `%`}`
            budzet.innerHTML = `Preostali budzet:   ${ukupnaSuma(prihodi) - ukupnaSuma(rashodi)}`
            rashodi.forEach(rashodi => rashodi.procenat = ukupnaSuma(prihodi) == 0 ?
                `` : procenat(rashod.iznos, ukupnaSuma(prihodi)).substring(0, 3) + `%`)
        })
        divTransakcija.append(btnObrisi,)

        divTransakcija.addEventListener(`mouseover`, () => {
            divTransakcija.lastChild.style.display = `inline-block`
        })
        divTransakcija.addEventListener(`mouseout`, () => {
            divTransakcija.lastChild.style.display = `none`
        })

        if (rashod.opis !== `` && rashod.iznos > 0) {
            errorOpis.textContent = ``
            errorIznos.textContent = ``
            inputTip.value = `0`
            rashodi.push(rashod)
            divRashodi.append(divTransakcija)
        }
    }

    konacanPrihod.innerHTML = `Ukupan prihod:   + ${ukupnaSuma(prihodi)}`
    konacanRashod.innerHTML = `Ukupan rashod:   - ${ukupnaSuma(rashodi)} ${ukupnaSuma(prihodi) == 0 ?
        `` : (procenat(ukupnaSuma(rashodi), ukupnaSuma(prihodi))).substring(0, 3) + `%`}`
    budzet.innerHTML = ` Preostali budzet:   ${ukupnaSuma(prihodi) - ukupnaSuma(rashodi)}`

    inputOpis.value = ``
    inputIznos.value = ``

    forma.reset()
})



