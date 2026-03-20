// =========================================
// EL MODELO: LA "TARJETA DE IDENTIFICACIÓN" DE UNA PERSONA
// =========================================
// Imagina que este archivo es una fábrica de tarjetas en blanco.
// Cada vez que registramos a alguien, usamos este "molde" para crear su tarjeta
// con su nombre, su sexo y su edad.

export default class Cl_mPersona {
  // Estas son las líneas en blanco de la tarjeta (empiezan vacías)
  private _nombre: string = "";
  private _sexo: string = "";
  private _edad: number = 0;

  // El "Constructor" es lo que pasa en el momento exacto en que creamos la tarjeta.
  // Recibe los datos y los escribe en las líneas correspondientes.
  constructor({ nombre, sexo, edad }: { nombre: string; sexo: string; edad: number }) {
    this.nombre = nombre;
    this.sexo = sexo;
    this.edad = edad;
  }

  // =========================================
  // LEYENDO Y ESCRIBIENDO EN LA TARJETA (Los "get" y "set")
  // =========================================
  // Los "set" sirven para guardar o modificar una información.
  // Los "get" sirven para leer o preguntar qué información está guardada.

  // Para guardar el nombre...
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  // Para leer o preguntar por el nombre...
  get nombre(): string {
    return this._nombre;
  }

  // Para guardar el sexo (f o m)...
  set sexo(sexo: string) {
    this._sexo = sexo;
  }
  // Para leer o preguntar por el sexo...
  get sexo(): string {
    return this._sexo;
  }

  // Para guardar la edad...
  set edad(edad: number) {
    this._edad = edad;
  }
  // Para leer o preguntar por la edad...
  get edad(): number {
    return this._edad;
  }
}
