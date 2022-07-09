interface IUser {
  createdAt: Date;
  updateAt: Date;
  name: string;
  lastName?: string;
}

// Se crea Alias para Utility Type
type UserRequired = Required<IUser>; // ahora lastname es obligatoria

type UserFinderParams = Partial<IUser>; // pone como opcional cualquier el tipo  que se esta pasando

type UserFinderResponse = Readonly<Omit<IUser, 'createdAt' | ''>>; // Omite el tipo seleccionado

type UserUpdateParams = Partial<Pick<IUser, 'name' | 'lastName'>>; // pone como opcional cualquier el tipo  que se esta pasando y pick agrega type seleccionados

type UserGroup = Record<string, IUser[]> // tipo del key y valor del key

class User {
  // Agrega el lastname opcional
  public add = (user: IUser):void => console.log(user);

  // Agragar Usuario con todas sus propiedades
  public addWithFullinfo = (user: UserRequired):void => console.log(user);

  // Busca un usuario por cualquiera de sus propiedades
  // Retornar un usuarion sin la propiedad createdAt
  // Retornar el usuario en modo lectura
  public find(props: UserFinderParams): UserFinderResponse {
    return { name: props } as IUser;
  }

  // Actualiza un usuario de forma parcial
  // Solo se puede actualizar name y lastname
  public update = (user: UserUpdateParams):void => console.log(user);

  // Crear un Mapa de ususarios agrupados por nombre
  // {
  //    Juan: [1, 2, 3, ...users]
  // }
  public groupByName(): UserGroup {
    return {};
  }
}

const users = new User();

users.add({
  name: 'Juan',
  createdAt: new Date(),
  updateAt: new Date(),
});

users.addWithFullinfo({
  name: 'Juan',
  lastName: '',
  createdAt: new Date(),
  updateAt: new Date(),
});

users.find({
  name: 'Juan',
});

users.update({
  name: 'Juan',
  lastName: '',
});

users.groupByName();
