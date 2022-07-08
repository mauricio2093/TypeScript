class Animal {
  public name: string;

  public size: number;

  public constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  public features(): void {
    console.log(`el anial es un ${this.name} y mide ${this.size} cm`);
  }
}

const obj = new Animal('serpiente', 2);
obj.features();
