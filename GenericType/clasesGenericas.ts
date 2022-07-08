class ClaseGenerica<T> {
  primerNombre: string;

  edadReal: T;

  constructor(edadReal:T, primerNombre:string) {
    this.edadReal = edadReal;
    this.primerNombre = primerNombre;
  }

  ShowMethod = (params:T = this.edadReal) => this.primerNombre + params;
}

const object = new ClaseGenerica({ sentencia: true, numeroEdad: 123 }, 'Angel');
console.log(object.ShowMethod);
