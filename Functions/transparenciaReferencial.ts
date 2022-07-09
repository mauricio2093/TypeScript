const numbers: number[] = [1, 4, 6, 7, 23, 62, 12];
// numbers = 2; la variable const no puede ser modificada
numbers.push(2); // pero se usa un metodo para modificarla -> push metodo mutable

const sort = (list: number[]) => list.sort();

console.log(sort(numbers));
console.log(numbers); // se modifica la variable

// protegiendo variable con readonly

const numbers2: readonly number[] = [1, 4, 6, 7, 23, 62, 12];
// numbers2.push(5); ----- el metodo ya no es mutable

const sort2 = (list: readonly number[]) => [...list].sort(); // se crea un clon

console.log(sort2(numbers2));
console.log(numbers2); // no se modifica la variable con transparencia referencial
