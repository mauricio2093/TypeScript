/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import { NombrePersonal, PersonaHumana, NombrePersonasColombia } from './modules/moduleA';
import * as importar from './modules/moduleA';
import Paises from './modules/moduleB';

console.log(NombrePersonal);

class Humano extends PersonaHumana {
  apellidoHumano:string;

  constructor(nombreHumano:string, apellidoHumano:string) {
    super(nombreHumano);
    this.apellidoHumano = apellidoHumano;
  }

  nombreCompleto = () => `El nombre es ${this.nombreHumano} ${this.apellidoHumano}`;
}

const datosHumano = new Humano('Mauricio', 'Cadena');
console.log(datosHumano.nombreCompleto());

NombrePersonasColombia('Juan', 'Camilo', 'Laura', 'Sofia');

importar.NombrePersonasColombia('Valentina', 'Estefania', 'Daniela', 'Vanessa');

const paises = new Paises('Colombia', 178000, 2000);
paises.mostrarPais();
