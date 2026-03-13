export default class Cl_mPersona {
  private _nombre: string = "";
  private _sexo: string = "";
  private _edad: number = 0;

  constructor({ nombre, sexo, edad }: { nombre: string; sexo: string; edad: number }) {
    this.nombre = nombre;
    this.sexo = sexo;
    this.edad = edad;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre(): string {
    return this._nombre;
  }
  set sexo(sexo: string) {
    this._sexo = sexo;
  }
  get sexo(): string {
    return this._sexo;
  }
  set edad(edad: number) {
    this._edad = edad;
  }
  get edad(): number {
    return this._edad;
  }
}
