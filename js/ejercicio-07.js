const frase = prompt(`Ingrese una frase`);

const palabras = frase.trim().split(" ");

let numPalabras = 0;

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 0) {
        numPalabras++;
    }
}
console.log(numPalabras)