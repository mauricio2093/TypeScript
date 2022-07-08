const opcionales = (nombre: string, apellido: string, edad: number) => console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);

opcionales('Mauricio', 'Cadena', 28);

const opcionales1 = (nombre: string, apellido: string, edad?: number) => {
  if (edad) {
    console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
  } else {
    console.log(`Mi nombre es ${nombre} ${apellido}.`);
  }
};
opcionales1('Mauricio', 'Cadena', 28);
opcionales1('Mauricio', 'Cadena');
