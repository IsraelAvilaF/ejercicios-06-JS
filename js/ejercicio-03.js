const num = +prompt(`Ingresa un número`);
const div = [2, 3, 5, 7];
let divisores = []

div.forEach(divisor => {
    if (num % divisor === 0){
        divisores.push(divisor);
    }
});

console.log(divisores);