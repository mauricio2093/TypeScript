const mostrarParametros = (nombre: string, apellido: string, edad: number = 28) => `Mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`;

let mostrandoParametros = mostrarParametros('Mauricio', 'Cadena');
console.log(mostrandoParametros);

mostrandoParametros = mostrarParametros('Kelly', 'Llanos', 27);
console.log(mostrandoParametros);
