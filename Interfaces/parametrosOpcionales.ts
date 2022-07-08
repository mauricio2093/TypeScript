interface Persona3 {
  altura: number;
  peso: number;
  nombre?: string;
}

const mostrarPersona = (persona: Persona3) => {
  const pesoMedio: number = persona.peso / persona.altura;
  if (persona.nombre) {
    return `Hola ${persona.nombre} tienes una media de peso de ${pesoMedio}`;
  }
  return `Hola tienes una media de peso de ${pesoMedio}`;
};

let featurePerson:Persona3 = { altura: 1.78, peso: 120 };
let persona = mostrarPersona(featurePerson);
console.log(persona);

featurePerson = { altura: 1.78, peso: 120, nombre: 'Mauricio' };
persona = mostrarPersona(featurePerson);
console.log(persona);
