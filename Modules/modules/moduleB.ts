class Paises {
  nombrePais: string;

  tamanoPais: number;

  alturaPais: number;

  constructor(nombrePais: string, tamanoPais: number, alturaPais: number) {
    this.alturaPais = alturaPais;
    this.nombrePais = nombrePais;
    this.tamanoPais = tamanoPais;
  }

  mostrarPais = ():void => console.log(`${this.nombrePais} ${this.tamanoPais} ${this.alturaPais}`);
}
export default Paises;
