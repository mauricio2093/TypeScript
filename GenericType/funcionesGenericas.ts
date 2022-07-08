const speed = (data: number, unit: string): void => console.log(`la velocidad es de ${data} ${unit}`);

speed(100, 'km');

/* ============= Funcion Generica ============ */
const speed1:any = (data: any, unit: any): any => console.log(`la velocidad es de ${data} ${unit}`);

speed1(100, 'km');
speed1('km', 100);
speed1(true, false);
speed1(String(Symbol(2)), 2n);
speed1({ function() { console.log('Hello World'); } }, [1, 2, 3, 'hola', 'mi', 'nombre', 'es', 'frailejon', 'ernesto', 'perez', { estado: true, numeros: [1, 3, 5] }]);
