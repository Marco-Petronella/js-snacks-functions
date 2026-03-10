/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const filterNames = names => {
    for (let i=0; i<names.length;i++)
        if (names[i][0]=="A") 
            console.log(names[i]);
            
}

// Invoca la funzione qui e stampa il risultato in console

filterNames(names);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]