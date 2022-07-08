// eslint-disable-next-line max-classes-per-file
class Herencia {
  apellido: string;

  propiedades: Array<string>;

  constructor(apellido:string, ...propiedades: Array<string>) {
    this.apellido = apellido;
    this.propiedades = propiedades;
  }

  mostrarApellido(): void {
    console.log(`${this.apellido}`);
  }

  mostrarPropiedades(): void {
    console.log(`${this.propiedades}`);
  }
}

class Padre extends Herencia {
  nombre: string;

  edad: number;

  constructor(nombre: string, edad: number, apellido:string, propiedades: string) {
    super(apellido, propiedades);
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarNombre(): void {
    console.log(`${this.nombre} ${this.apellido}`);
  }

  mostrarEdad(): void {
    console.log(`${this.edad}`);
  }
}

class Hijo extends Herencia {
  nombre: string;

  edad: number;

  constructor(nombre: string, edad: number, apellido:string, propiedades: string) {
    super(apellido, propiedades);
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarNombre(): void {
    console.log(`${this.nombre} ${this.apellido}`);
  }

  mostrarEdad(): void {
    console.log(`${this.edad}`);
  }
}

const padreFamilia = new Padre('Carlos', 35, 'Osorio', 'casa, finca, seguro');

const hijoFamilia = new Hijo('Juan', 15, 'Osorio', 'casa, carro, moto');

padreFamilia.mostrarNombre();
hijoFamilia.mostrarNombre();
hijoFamilia.mostrarPropiedades();
hijoFamilia.mostrarApellido();
