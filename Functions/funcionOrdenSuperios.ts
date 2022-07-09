/* eslint-disable no-unused-vars */
interface Beer {
  nameCerveza: string,
  alcoholCerveza: number,
}

const data: Beer[] = [
  {
    nameCerveza: 'Delirium',
    alcoholCerveza: 7.5,
  },
  {
    nameCerveza: 'Erdinger',
    alcoholCerveza: 8.3,
  },
  {
    nameCerveza: 'Corona',
    alcoholCerveza: 4,
  },
];

// funcion de primer orden
const showInfo = (info: string[]):void => info.forEach((item) => console.log(item));
const showUpper = (info: string[]):void => info.forEach((item) => console.log(item.toUpperCase()));
const showOrdered = (info: string[]):void => info.sort().forEach((item, index) => console.log(`${index + 1} ${item}`));

// funcion de orider superior
const getInfo = (beers: Beer[], fn: (name: string[]) => void) => {
  const beersInfo = beers.map((element) => `cerveza: ${element.nameCerveza} con alcohol ${element.alcoholCerveza}`);
  fn(beersInfo);
};

getInfo(data, showInfo);
getInfo(data, showUpper);
getInfo(data, showOrdered);
