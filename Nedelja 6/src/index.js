
import { Korisnik, Kupac, Admin, ListaKorisnika, ListaRegKorisnika } from "./korisnici.js";
import { PrehrambeniProizvod, BelaTehnika, ListaProizvoda } from "./proizvodi.js"

const forma = document.querySelector(`#forma`)

const inputUserName = document.querySelector(`#username`)
const inputPassword = document.querySelector(`#password`)

const divKorpa = document.querySelector(`.korpa`)
const divProizvodi = document.querySelector(`.proizvodi`)


//lista registrovanih korisnika

let korisnik01 = new Korisnik(`Vesna`, `vesna123`)
let korisnik02 = new Korisnik(`Ana`, `Ana123`)
let korisnik03 = new Korisnik(`Vlada`, `Vlada123`)

let korisnik04 = new Korisnik(`Sara`, `Sara123`)

let listaRegKorisnika = new ListaRegKorisnika()

listaRegKorisnika.dodajKorisnika(korisnik01)
listaRegKorisnika.dodajKorisnika(korisnik02)
listaRegKorisnika.dodajKorisnika(korisnik03)
listaRegKorisnika.dodajKorisnika(korisnik04)


//kreiranje dostupnih proizvoda

let proizvod1 = new PrehrambeniProizvod(`Mleko`, `115,00`, `31.09.2021.`, `35`)
let proizvod2 = new PrehrambeniProizvod(`Sir`, `240,00`, `18.10.2021.`, `25`)
let proizvod3 = new PrehrambeniProizvod(`Margarin`, `78,00`, `02.11.2021.`, `28`)
let proizvod4 = new PrehrambeniProizvod(`Šećer`, `62,00`, `15.06.2022.`, `118`)
let proizvod5 = new PrehrambeniProizvod(`Brašno`, `57,00`, `30.10.2022.`, `220`)

let proizvod6 = new BelaTehnika(`Pegla`, `3.850,00`, `2`, `17`)
let proizvod7 = new BelaTehnika(`Usisivač`, `8.200,00`, `2`, `22`)
let proizvod8 = new BelaTehnika(`Šporet`, `22.700,00`, `5`, `12`)
let proizvod9 = new BelaTehnika(`Frižider`, `28.850,00`, `5`, `7`)
let proizvod10 = new BelaTehnika(`Veš mašina`, `32.400,00`, `5`, `2`)

let listaProizvoda = new ListaProizvoda()

listaProizvoda.dodajProizvod(proizvod1)
listaProizvoda.dodajProizvod(proizvod2)
listaProizvoda.dodajProizvod(proizvod3)
listaProizvoda.dodajProizvod(proizvod4)
listaProizvoda.dodajProizvod(proizvod5)
listaProizvoda.dodajProizvod(proizvod6)
listaProizvoda.dodajProizvod(proizvod7)
listaProizvoda.dodajProizvod(proizvod8)
listaProizvoda.dodajProizvod(proizvod9)
listaProizvoda.dodajProizvod(proizvod10)

//dodavanje proizvoda na stranicu:

listaProizvoda.proizvodi.forEach(proizvod => {

    const divProizvod = document.createElement(`div`)

    const btnDodaj = document.createElement(`button`)
    btnDodaj.innerHTML = `Dodaj u korpu`

    if (proizvod instanceof PrehrambeniProizvod) {

        divProizvod.innerHTML = `
        <p>Naziv: ${proizvod.naziv}</p>    
        <p>Cena: ${proizvod.cena} din</p>
        <p>Rok trajanja: ${proizvod.rokTrajanja} godina</p>
        <p>Dostupna količina: ${proizvod.dostupnaKolicina}</p>
        <input type="number" name="" id="kolicina">`

        divProizvod.append(btnDodaj)

    } else if (proizvod instanceof BelaTehnika) {

        divProizvod.innerHTML = `
        <p>Naziv: ${proizvod.naziv}</p>    
        <p>Cena: ${proizvod.cena} din</p>
        <p>Rok trajanja: ${proizvod.garancija} godina</p>
        <p>Dostupna količina: ${proizvod.dostupnaKolicina}</p>
        <input type="number" name="" id="kolicina">`

        divProizvod.append(btnDodaj)
    }

    divProizvodi.append(divProizvod)

    

})


//kreiranje korisnika na login 



forma.addEventListener(`submit`, (event) => {
    event.preventDefault()

    let korisnik = new Kupac(inputUserName.value.trim(), inputPassword.value.trim())

    let listaKorisnika = new ListaKorisnika()

    listaKorisnika.dodajKorisnika(korisnik)

    listaKorisnika.prikaziKorisnike()
})
















