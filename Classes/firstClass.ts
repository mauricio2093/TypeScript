class Vehiculo {
  marca:string;

  fecha:string;

  puertas:number;

  constructor(marca: string, fecha: string, puertas: number) {
    this.marca = marca;
    this.fecha = fecha;
    this.puertas = puertas;
  }

  caracteristicas() {
    console.log(`El carro es ${this.marca} y tiene ${this.puertas} puertas`);
  }

  vendido() {
    console.log(`El carro  ${this.marca} que tiene ${this.puertas} puertas fue vendido el ${this.fecha}`);
  }
}

const carro = new Vehiculo('ford', '12/7/2022', 4);
console.log(`marca: ${carro.marca}`);
console.log(`fecha: ${carro.fecha}`);
console.log(`puertas: ${carro.puertas}`);
carro.caracteristicas();
carro.vendido();
carro.marca = 'renault';
carro.puertas = 2;
carro.fecha = '20/07/2022';
carro.vendido();
