interface Persona1 {
  // Atributo
  nombre1: string;
  apellido: string;
  // Método
}

const caminar = (persona:Persona1): void => console.log(`estoy caminando con ${persona.nombre1} ${persona.apellido}`);

const nombre1:Persona1 = { nombre1: 'Kelly', apellido: 'Llanos' };
caminar(nombre1);
