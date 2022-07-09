const getTotal = (amount: number, tax: number) => amount + (amount * tax);

console.log(getTotal(100, 0.16));
console.log(getTotal(200, 0.16));
console.log(getTotal(300, 0.16));

// clousure haciendo curryficacion
const getTotalCurry = (tax: number) => (amount: number) => amount + (amount * tax);

const calc = getTotalCurry(0.16);
console.log(calc(100));
console.log(calc(200));
console.log(calc(300));

console.log(getTotalCurry(0.16)(100));
