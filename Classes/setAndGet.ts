const permiso: boolean = false;

class Persona {
  public nombre3: string;

  constructor(nombre: string) {
    this.nombre3 = nombre;
  }

  get getNombre(): string {
    return this.nombre3;
  }

  set setNombre(nombre: string) {
    if (permiso) {
      this.nombre3 = nombre;
    } else {
      console.log('No tienes permiso para esto');
    }
  }
}
const objeto = new Persona('Mauricio');
objeto.setNombre = 'Jose';
console.log(objeto.getNombre);
