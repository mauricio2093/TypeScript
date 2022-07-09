/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Payment, ICheckOut } from './modules'; // Acorta las importaciones que se hacen desde una misma carpteta crando un index.ts

const payment = new Payment();
const checkout: ICheckOut = payment.create();
console.log(checkout);
