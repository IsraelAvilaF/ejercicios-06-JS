const fecha = prompt(`Ingrese su fecha de nacimiento en formato YYYY-MM-DD`);

const fechaNacimiento = new Date(fecha);

const fechaAhora = new Date();

const diferencia = fechaAhora - fechaNacimiento;

// console.log(`${diferencia}`)

const dias = Math.floor(diferencia/(1000*60*60*24));

console.log(`${dias}`)