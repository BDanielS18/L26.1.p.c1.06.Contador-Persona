export default class Cl_vPersona {
  inNombre: HTMLInputElement;
  inSexo: HTMLSelectElement;
  inEdad: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("persona") as HTMLElement;
    this.inNombre = document.getElementById(
      "persona_inNombre",
    ) as HTMLInputElement;
    this.inSexo = document.getElementById(
      "persona_inSexo",
    ) as HTMLSelectElement;
    this.inEdad = document.getElementById(
      "persona_inEdad",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "persona_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "persona_btAceptar",
    ) as HTMLButtonElement;
    this.mostrar();
  }
  get nombre(): string {
    return this.inNombre.value;
  }
  set nombre(nombre: string) {
    this.inNombre.value = nombre;
  }
  get sexo(): string {
    return this.inSexo.value;
  }
  set sexo(sexo: string) {
    this.inSexo.value = sexo;
  }
  set edad(edad: number) {
    this.inEdad.value = `${edad}`;
  }
  get edad(): number {
    return parseInt(this.inEdad.value);
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
