interface Drink {
  nameDrink: string;
}

interface AlcoholDrink extends Drink {
  alcholDrink: number;

  showInfo(): string;
}

interface MixedDrink {
  ingredients: string[];
}

class Wine implements AlcoholDrink {
  nameDrink: string;

  alcholDrink: number;

  constructor(nameDrink: string, alcholDrink: number) {
    this.nameDrink = nameDrink;
    this.alcholDrink = alcholDrink;
  }

  showInfo(): string {
    return `info: ${this.nameDrink} ${this.alcholDrink}`;
  }
}

class Cocktail implements AlcoholDrink, MixedDrink {
  nameDrink: string;

  alcholDrink: number;

  ingredients: string[];

  constructor(nameDrink: string, alcholDrink: number, ...ingredients: string[]) {
    this.nameDrink = nameDrink;
    this.alcholDrink = alcholDrink;
    this.ingredients = ingredients;
  }

  showInfo(): string {
    const ingredientsInfo = this.ingredients.reduce((ac, e) => `${ac}${' '}${e}${', '}${''}`);
    return `info: ${this.nameDrink} ${this.alcholDrink}, ingredientes: ${ingredientsInfo}`;
  }
}

const margarita = new Cocktail('Margarita', 12.5, 'tequila', 'limon', 'sal', 'soda', 'hielo');
const redWine = new Wine('Red Wine', 5);
const rioja = new Wine('Vino Rioja', 14);
const malbec = new Wine('Vino Malbec', 16);

const addDrink = [margarita, redWine, rioja, malbec];

const showDrinks = (drinks: AlcoholDrink[]): void => {
  drinks.forEach((e) => console.log(e.showInfo()));
};

showDrinks(addDrink);
