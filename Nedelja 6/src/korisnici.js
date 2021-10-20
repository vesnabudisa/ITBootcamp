/*1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
Klasa kupac sadrzi ime ,sifru i korpu .
Div korpa se prikazuje tek kada se korisnik ulogovao.

2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod
 
jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 

proizvod moze biti prehrambeni ili bela tehnika

ako je bela tehnika ima i garanciju

ako je prehrambeni ima rok trajanja

3. Korisnik moze da doda proizvod u korpu , ako unese kolicinu vecu od dostupne kolicine ispisati poruku o gresci 
Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe

DODATNO , NE MORA:
4. Ako je korisnik admin moze da doda nov proizvod*/

class Korisnik {
    username
    password

    constructor(username, password) {
        this.username = username
        this.password = password
    
    }

    get username() {
        return this.username
    }

    get password() {
        return this.password
    }

    set username(username) {
        this.username = username
    }

    set password(password) {
        this.password = password
    }

}

class Kupac extends Korisnik{

    korpa

    constructor(username, password, korpa) {
        super(username,password)
        this.korpa = []
    }

    get korpa() {
        return this.korpa
    }

    set korpa(korpa) {
        this.korpa = []
    }

}

class Admin extends Korisnik {

    constructor(username, password) {
        super(username, password)
    }
}

class ListaRegKorisnika extends Korisnik {

    regKorisnici
    constructor() {
        super(username, password)
        this.regKorisnici = []
    }

    get regKorisnici (){
        return this.regKorisnici
    }

    set regKorisnici(regKorisnici){
        this.regKorisnici = regKorisnici
    }

    dodajKorisnika(korisnik) {
        if (!(korisnik instanceof Korisnik)) {
            return
        }
        this.regKorisnici.push(korisnik)
    }
    prikaziKorisnike(){
        this.regKorisnici.forEach( korisnik => {
            console.log(korisnik)
        })
    }

}

class ListaKorisnika {

    korisnici
    constructor() {
        this.korisnici = []
    }

    dodajKorisnika(korisnik) {
        if (!(korisnik instanceof Korisnik)) {
            return
        }
        this.korisnici.push(korisnik)
    }

    prikaziKorisnike(){
        this.korisnici.forEach( korisnik => {
            console.log(korisnik)
        })
    }

}





export {Korisnik, Kupac, Admin, ListaKorisnika, ListaRegKorisnika}