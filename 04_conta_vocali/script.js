/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const vocalSearch = (word) => {
    reg= /a|e|i|o|u/g;
    const vocalsFound = word.match(reg);
    return vocalsFound.length + " " + vocalsFound;
}

// Invoca la funzione qui e stampa il risultato in console


console.log(vocalSearch(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
