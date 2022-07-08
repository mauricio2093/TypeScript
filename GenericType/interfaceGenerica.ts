interface Animal<T> {
  nameAnimal: T;
}

const boolAnimal:Animal<boolean> = { nameAnimal: false };
const numAnimal:Animal<number> = { nameAnimal: 32 };
const strAnimal:Animal<string> = { nameAnimal: '12321' };

console.log(boolAnimal);
console.log(numAnimal);
console.log(strAnimal);
