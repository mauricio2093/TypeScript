/* eslint-disable no-unused-vars */
interface UserMap {
  id: number;
  description: string;
  isActive: boolean;
}

type MapUser = {
  [prop:string]: UserMap;
}

const userMap: MapUser = {
  juan: {
    id: 1,
    description: 'Back-End Developer',
    isActive: true,
  },
  Carlos: {
    id: 2,
    description: 'Front-End Developer',
    isActive: false,
  },
};

console.log(userMap);

// Mas Complejo

interface UserModel {
  id: number;
  description: string;
  isActive: boolean;
}

type QuerySelection<T> = {
  [K in keyof T]?: boolean;
};

type Truely<T> = {
  [K in keyof T as T[K] extends true ? K : never]: T[K];
};

type Contain<K, T> = K extends keyof T ? K : never;

type QueryResult<T, S> = {
  readonly[K in keyof T as Contain<K, Truely<S>>]: T[K];
};

class ModelUser<T> {
  select<S extends QuerySelection<T>>(selection: S): QueryResult<T, S> {
    return { } as QueryResult<T, S>;
  }
}

const modelUser = new ModelUser<UserModel>();
const result = modelUser.select({
  id: true,
  description: true,
  isActive: true,
});
