/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { show } from './typeBeer';

type Beer = {
  nameBeer: string,
  alcoholBeer: number,
  brandBeer?: string,
}

type Snack = {
  nameSnack: string,
  priceSnack: number,
}

const cervezaAguila:Beer = {
  nameBeer: 'Aguila',
  alcoholBeer: 7.5,
};

show(cervezaAguila);

const combo: Beer & Snack = {
  nameBeer: 'Corona',
  alcoholBeer: 4.5,
  brandBeer: 'Modelo',
  nameSnack: 'Pastel',
  priceSnack: 100,
};

console.log(combo);
