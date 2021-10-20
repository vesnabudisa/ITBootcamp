//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti

let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti" 

let a = string1.substring(4)
let b = string2.substring(4)
let c = string3.substring(4)
let d = string4.substring(4)

let a1 = string1.toLowerCase().includes(`string koji je`)
let b1 = string2.toLowerCase().includes(`string koji je`)
let c1 = string3.toLowerCase().includes(`string koji je`)
let d1 = string4.toLowerCase().includes(`string koji je`)

if (a1 == true && b1 !== true && c1 !== true && d1 !== true) {
    console.log(b + c + d)
} else if (a1 !== true && b1 == true && c1 !== true && d1 !== true) {
    console.log(a + c + d)
} else if (a1 !== true && b1 !== true && c1 == true && d1 !== true) {
    console.log(a + b + d)
} else if (a1 !== true && b1 !== true && c1 !== true && d1 == true) {
    console.log(a + b + c)
} else if (a1 !== true && b1 !== true && c1 == true && d1 == true) {
    console.log(a + b)
} else if (a1 !== true && b1 == true && c1 !== true && d1 == true) {
    console.log(a + c)
} else if (a1 !== true && b1 == true && c1 == true && d1 !== true) {
    console.log(a + d)
} else if (a1 == true && b1 !== true && c1 !== true && d1 == true) {
    console.log(b + c)
} else if (a1 == true && b1 !== true && c1 == true && d1 !== true) {
    console.log(b + d)
} else if (a1 == true && b1 == true && c1 !== true && d1 !== true) {
    console.log(c + d)
} else if (a1 !== true && b1 == true && c1 == true && d1 == true) {
    console.log(a)
} else if (a1 == true && b1 !== true && c1 == true && d1 == true) {
    console.log(b)
} else if (a1 == true && b1 == true && c1 !== true && d1 == true) {
    console.log(c)
} else if (a1 == true && b1 == true && c1 == true && d1 !== true) {
    console.log(d)
} else {
    console.log(`Nije moguce sastaviti stringove jer sadrze deo recenice "string koji je".`)
}





