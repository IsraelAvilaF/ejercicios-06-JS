const num = +prompt(`Ingrese un número entero`);

let mult = 1;

for(let i = 1; i <= num; i++){
    mult *=i;
}

console.log(`La multiplicación de todos los números desde 1 hasta ${num} es: ${mult}`);