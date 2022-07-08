interface General {
  // eslint-disable-next-line no-unused-vars
  (firstName: string, lastName: string, age: number):void;
}

const functionGeneral:General = function (firstName: string, lastName: string, age: number): void {
  console.log(`${firstName} ${lastName} tiene ${age} años`);
};

functionGeneral('Mauricio', 'Cadena', 37);
