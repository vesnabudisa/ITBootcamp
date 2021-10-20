class Proizvod {
    naziv
    cena
    dostupnaKolicina

    constructor(naziv, cena, dostupnaKolicina) {
        this.naziv = naziv
        this.cena = cena
        this.dostupnaKolicina = dostupnaKolicina
    }

    get naziv() {
        return this.naziv
    }

    get cena() {
        return this.cena
    }

    get dostupnaKolicina() {
        return this.dostupnaKolicina
    }

    set naziv(naziv) {
        this.naziv = naziv
    }

    set cena(cena) {
        this.cena = cena
    }

    set korpa(korpa) {
        this.korpa = korpa
    }

}

class PrehrambeniProizvod extends Proizvod {
    rokTrajanja

    constructor(naziv, cena, rokTrajanja, dostupnaKolicina) {
        super(naziv, cena, dostupnaKolicina)
        this.rokTrajanja = rokTrajanja
    }

    get rokTrajanja() {
        return this.rokTrajanja
    }

    set rokTrajanja(rokTrajanja) {
        this.rokTrajanja = rokTrajanja
    }
}

class BelaTehnika extends Proizvod {
    garancija

    constructor(naziv, cena, garancija, dostupnaKolicina) {
        super(naziv, cena, dostupnaKolicina)
        this.garancija = garancija
    }

    get garancija() {
        return this.garancija
    }

    set garancija(garancija) {
        this.garancija = garancija
    }
}

class ListaProizvoda {

    proizvodi

    constructor (){
        this.proizvodi = []
    }

    dodajProizvod(proizvod) {
        if(!(proizvod instanceof Proizvod)){
            return 
        }
        this.proizvodi.push(proizvod)
    }

    prikaziProizvode(){
        this.proizvodi.forEach( proizvod => {
            console.log(proizvod)
        })
    }
}

export {PrehrambeniProizvod, BelaTehnika, ListaProizvoda}