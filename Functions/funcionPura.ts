// Funcion Impura  -> no regresa el mismo valor al ser ejecutada varias veces
const some = () => Math.random();
console.log(some());
console.log(some());
console.log(some());

// funcion Pura -> regresa el mismo valor al ser ejecutada varias veces
const something = () => 'Función Pura';
console.log(something());
console.log(something());
console.log(something());
