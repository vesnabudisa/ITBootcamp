/* 2. Treba izracunati popust U DINARIMA koji ostvaruje kupac.

Pravila za ostvarivanje popusta su sledeca:

Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
Svi ostali ne ostvaruju nikakav popust.

Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:

Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara
*/

let iznosBezPopusta = 10000
let popustPoTipuZ = iznosBezPopusta*0.05
let popustPoTipuS = iznosBezPopusta*0.2
let popustPoTipuP = iznosBezPopusta*0.3
let popustPoTipuF = iznosBezPopusta*0.1
let popustVikend = iznosBezPopusta*0.05
let danUNedelji = 7
let ukupanPopust

let kupac = `zaposleni`

switch (kupac) {
    case `zaposleni`:
        if(iznosBezPopusta > 5000){
            ukupanPopust = iznosBezPopusta-popustPoTipuZ
        }else{
            ukupanPopust = iznosBezPopusta
        }
        if(danUNedelji == 6 || 7 == danUNedelji){
            console.log(`Ostvareni popust: ` + (iznosBezPopusta - (ukupanPopust-(ukupanPopust*0.05))) + ` dinara.`)
        }else{
            console.log(`Ostvareni popust: ` + (iznosBezPopusta - ukupanPopust) + ` dinara.`)
        }
        break;

    case `student`:
        if(iznosBezPopusta > 3000){
            ukupanPopust = iznosBezPopusta-popustPoTipuS
        }else{
            ukupanPopust = iznosBezPopusta
        }
        if(danUNedelji == 6 || 7 == danUNedelji){
            console.log(`Ostvareni popust: ` + (iznosBezPopusta - (ukupanPopust-(ukupanPopust*0.05))) + ` dinara.`)
        }else{
            console.log(`Ostvareni popust: ` + (iznosBezPopusta - ukupanPopust) + ` dinara.`)
        }
        break;

    case `penzioner`:
        if (iznosBezPopusta > 2000) {
            ukupanPopust = iznosBezPopusta - popustPoTipuP
        } else {
            ukupanPopust = iznosBezPopusta
        }
        if (danUNedelji == 6 || 7 == danUNedelji) {
            console.log(`Ostvareni popust: ` + (iznosBezPopusta - (ukupanPopust - (ukupanPopust * 0.05)) + ` dinara.`)) 
        } else {
            console.log(`Ostvareni popust: ` + (iznosBezPopusta - ukupanPopust) + ` dinara`)
        }
        break;

    case `firma`:
        if (iznosBezPopusta > 10000) {
            ukupanPopust = iznosBezPopusta - popustPoTipuF
        } else {
            ukupanPopust = iznosBezPopusta
        }
        if (danUNedelji == 6 || 7 == danUNedelji) {
            console.log(`Ostvareni popust: ` + (iznosBezPopusta-(ukupanPopust - (ukupanPopust * 0.05))) + ` dinara.`)
        } else {
            console.log(`Ostvareni popust: ` + (iznosBezPopusta - ukupanPopust) + ` dinara.`)
        }
        break;

    case `obican kupac`:
        if (danUNedelji == 6 || 7 == danUNedelji) {
            console.log(`Ostvareni popust: ` + popustVikend + ` dinara.`)
        } else {
            console.log(`Ostvareni popust: ` + (iznosBezPopusta - iznosBezPopusta) + ` dinara.`)
        }
        break;

    default:
        break;
}