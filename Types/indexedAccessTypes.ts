/* eslint-disable no-unused-vars */
interface Person {
  name: string;
  age: number;
}

type Pair = [boolean, number];

type Tags = string[];

type age = Person[keyof Person];

type tag = Tags[number];

type P = Pair[number];
