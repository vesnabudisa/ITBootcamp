//1. Na osnovu kolicine i cene artikla ispisati ukupnu cenu
//Kolicina je zadata u gramima
//cena je zadata po kilogramu

//2. Dopuniti 4. zadatak sa casa kolicinom novca, i ispisati racun (ako nema dovoljno novca ispisati poruku)

    let cena = 100
    let kolicina = 3000
    let ukupnaCena = (kolicina / 1000) * cena

    console.log(`Ukupna cena je: ` + ukupnaCena )

    let kolicinaNovca = 500
    let kusur = kolicinaNovca - ukupnaCena


    if (kusur > 0) {
        console.log(`Jabuke ajdared 1 kg = ` + cena + ` dinara;
            Kolicina = ` + kolicina + ` grama;
            Za uplatu: ` + ukupnaCena + ` dinara
            Uplaceno = ` + kolicinaNovca + ` dinara;
            Povracaj = ` + kusur + ` dinara;`)
    }else{
        console.log(`Kolicina novca nije dovoljna!`)
    }

