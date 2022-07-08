// eslint-disable-next-line max-classes-per-file
class Perros {
  protected tipoDeAnimal: string = 'mamifero';

  protected especieFamiliar: string = 'Canis Lupus';

  public size: number;

  constructor(size: number) {
    this.size = size;
  }

  dogFeatures() {
    console.log(`Caracteristicas:
    Tipo: ${this.tipoDeAnimal}
    Familia: ${this.especieFamiliar}
    Size: ${this.size}
    `);
  }
}

class Bulldog extends Perros {
  public location: string;

  public comprar: boolean;

  protected raza: string = 'Bulldog';

  constructor(size: number, location: string, comprar: boolean) {
    super(size);
    this.location = location;
    this.comprar = comprar;
  }

  sell() {
    console.log(`Perro de raza ${this.raza} hubicado en ${this.location} de tamaño ${this.size}: comprar: ${this.comprar === true ? 'Si' : 'No'} `);
  }
}

const comprarPerro = new Bulldog(20, 'Cartago', false);

comprarPerro.dogFeatures();
comprarPerro.sell();
