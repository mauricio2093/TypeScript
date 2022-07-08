interface Persona2 {
  readonly nombre2: string;
  readonly apellido2: string;
}

let nombre2:Persona2 = { nombre2: 'Kelly', apellido2: 'Llanos' };
nombre2 = { nombre2: 'Mauricio', apellido2: 'Cadena' };
// nombre2.apellido2 = 'barona'; no permite el cambio particular
console.log(nombre2);
