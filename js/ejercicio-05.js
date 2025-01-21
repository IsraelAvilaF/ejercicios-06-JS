const num = [15, 42, 3, 18, 90, 67, 29];

let maximo = -Infinity;
let segundoMaximo = -Infinity;

for (let numero of num) {
    if (numero > maximo) {
        segundoMaximo = maximo;
        maximo = numero;
    } else if (numero > segundoMaximo && numero < maximo) {
        segundoMaximo = numero;
    }
}

console.log(`El segundo número más grande es: ${segundoMaximo}`);