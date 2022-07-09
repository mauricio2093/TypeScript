/* eslint-disable import/prefer-default-export */
type Beer = {
  nameBeer: string,
  alcoholBeer: number,
}

export function show(beer: Beer): void {
  console.log(`info: ${beer.nameBeer} ${beer.alcoholBeer}`);
}

const myBeer: Beer = {
  nameBeer: 'delirium',
  alcoholBeer: 7.5,
};

show(myBeer);
