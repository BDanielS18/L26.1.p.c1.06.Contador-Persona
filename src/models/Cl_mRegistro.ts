import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mRegistro {
  private cntMujeres: number;
  private cntHombres: number;
  private mayorEdad: number = 0;
  private sexoMayorEdad: string = "";

  constructor() {
    this.cntMujeres = 0;
    this.cntHombres = 0;
  }
  get totalMujeres(): number {
    return this.cntMujeres;
  }
  get totalHombres(): number {
    return this.cntHombres;
  }
  get edadMayor(): number {
    return this.mayorEdad;
  }
  get sexoMayor(): string {
    return this.sexoMayorEdad;
  }
  procesarPersona(p: Cl_mPersona): void {
    if (p.sexo === "M") {
      this.cntMujeres ++;
    }
    if (p.sexo === "H") {
      this.cntHombres ++;
    }
      if (p.edad > this.mayorEdad) {
      this.mayorEdad = p.edad;
      this.sexoMayorEdad = p.sexo;
    }
  }
  totalPersonas(): number {
    return (this.cntMujeres + this.cntHombres);
  }
}
