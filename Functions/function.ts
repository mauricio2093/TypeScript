function mostrar(): void {
  console.log('mostrando funcion');
}
mostrar();

function sumar(a: number, b: number): number {
  return a + b;
}
const suma: number = sumar(2, 2);
console.log(suma);
