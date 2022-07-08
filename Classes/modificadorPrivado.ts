class AnimalZoo {
  private name: string;

  private size: number;

  public constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  public features(): void {
    console.log(`el anial es un ${this.name} y mide ${this.size} cm`);
  }
}

const obj2 = new AnimalZoo('serpiente', 2);

obj2.features();
