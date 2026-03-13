export default class Cl_vRegistro {
  lblNombre: HTMLInputElement;
  lblSexo: HTMLInputElement;
  lblEdad: HTMLInputElement;
  btNuevaPersona: HTMLButtonElement;
  vista: HTMLElement | null;
  salida: HTMLElement;
  constructor() {
    this.vista = document.getElementById("body");
    this.salida = document.getElementById("salida") as HTMLElement;
    this.btNuevaPersona = document.getElementById(
      "body_btNuevaPersona",
    ) as HTMLButtonElement;
    this.lblNombre = document.getElementById(
      "body_lblNombre",
    ) as HTMLInputElement;
    this.lblSexo = document.getElementById(
      "body_lblSexo",
    ) as HTMLInputElement;
    this.lblEdad = document.getElementById(
      "body_lblEdad",
    ) as HTMLInputElement;
  }
  reportar({ nombre, sexo, edad }: { nombre: string; sexo: string; edad: number }): void {
    this.lblNombre!.innerHTML = `${nombre}`;
    this.lblSexo!.innerHTML = `${sexo}`;
    this.lblEdad!.innerHTML = `${edad}`;
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
  mostrarTotales(totalPersonas: number, totalMujeres: number, totalHombres: number, edadMayor: number,
    sexoMayor: string): void {
    this.salida.innerHTML = `
      Total de personas: ${totalPersonas} <br>
      Mujeres: ${totalMujeres} <br>
      Hombres: ${totalHombres} <br>
      Persona con Mayor Edad: ${edadMayor} <br>
      Sexo de Persona con Mayor Edad: ${sexoMayor}
    `;
  }
}

