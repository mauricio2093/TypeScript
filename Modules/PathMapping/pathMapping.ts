/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { ModuleC } from '@module/moduleC'; // se crea una extencion con path en tsconfig para minimizar las extenciones
import { ModuleD } from '@module/moduleD';

const moduleC: ModuleC = {
  name: 'Mauricio',
  lastname: 'Cadena',
};

const moduleD: ModuleD = {
  name: 'Kelly',
  lastname: 'Llanos',
};

console.log(`${moduleC} ${moduleD}`);
