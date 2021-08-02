//2. Ispisati najkraci string koji sadrzi rec "string"

let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti"

let prvi = string1.toLowerCase().includes(`string`)
let drugi = string2.toLowerCase().includes(`string`)
let treci = string3.toLowerCase().includes(`string`)
let cetvrti = string4.toLowerCase().includes(`string`)

let a = string1.length
let b = string2.length
let c = string3.length
let d = string4.length

if (prvi == true) {
    if (a < b && a < c && a < d) { }
    console.log(`"` + string1 + `"`)
} else if (drugi == true) {
    if (b < a && b < c && b < d) { }
    console.log(`"` + string2 + `"`)
} else if (treci == true) {
    if (c < a && c < b && c < d) { }
    console.log(`"` + string3 + `"`)
} else if (cetvrti == true) {
    if (d < a && d < b && d < c) { }
    console.log(`"` + string4 + `"`)
} else {
    console.log(`Nijedan od zadatih stringova ne sadrzi rec "string".`)
}