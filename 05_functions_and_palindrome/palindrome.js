 /*1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
 Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
 Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
 Ispis: "12345678987654321"
  */


function najduziPalindrom(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length - i; j++) {
            let palindrom = string.substring(j, j + i + 1)
            if (palindrom == palindrom.split('').reverse().join('')){
                poslednjiPalindrom = palindrom
            }
        }
    }
    return poslednjiPalindrom
}
