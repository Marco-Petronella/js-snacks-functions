/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const vocalSearch = (word) => {
    reg= /a|e|i|o|u/g;
    const vocalsFound = word.match(reg);
    return vocalsFound.length + " (" + vocalsFound + ")";
}
const vocalSearchManual = (word) => {
    const vocalsFound = [];
    for (i=0; i<word.length; i++) {
        const character = word[i];
        if (character=="a" || character=="e" || character=="i" || character=="o" || character=="u")
            vocalsFound.push(character);
    }
    return vocalsFound;
}

// Invoca la funzione qui e stampa il risultato in console


const lowerCaseWord = word.toLowerCase()
console.log(vocalSearch(lowerCaseWord));
console.log(vocalSearchManual(lowerCaseWord));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
