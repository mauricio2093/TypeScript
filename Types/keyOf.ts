interface UserKeyOf {
  name: string;
  age: number;
}

class Form {
  constructor(private form: UserKeyOf) {
    this.form = form;
  }

  get(field: keyof UserKeyOf):void {
    console.log(field);
  }
}

const form = new Form(
  {
    name: 'Hector',
    age: 30,
  },
);

form.get('name'); // solo puedes poner el name
