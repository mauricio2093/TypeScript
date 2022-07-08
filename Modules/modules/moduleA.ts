// eslint-disable-next-line import/prefer-default-export
export const NombrePersonal:string = 'Mauricio';

export class PersonaHumana {
  nombreHumano:string;

  constructor(nombreHumano: string) {
    this.nombreHumano = nombreHumano;
  }
}

export const NombrePersonasColombia = (...nombrePersonas:string[]) => console.log(`${nombrePersonas}`);
