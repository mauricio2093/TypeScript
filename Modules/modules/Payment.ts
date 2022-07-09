/* eslint-disable import/no-unresolved */
import { ICheckOut } from './interface/Checkout.interface';

/* eslint-disable import/prefer-default-export */
export class Payment {
  create(): ICheckOut {
    return {
      name: 'Mauricio',
      lastname: 'Cadena',
    };
  }
}
