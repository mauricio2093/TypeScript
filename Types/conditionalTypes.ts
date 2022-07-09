/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
type Fn = () => boolean; // genera una tipo de funcion que retorna un boolean
type R = ReturnType<Fn | typeof m>; // retorna un booleano solo debe ser funciones

function m(): number { // funcion retorna un number
  return 0;
}

type A<T> = T extends Array<infer E> ? E : any;

type X = A<number[]>;

class Example<T> {
  constructor(private media: T) {
    this.media = media;
  }

  configure(config: A<T>): void {
    console.log(config);
  }
}

const example = new Example(3);
