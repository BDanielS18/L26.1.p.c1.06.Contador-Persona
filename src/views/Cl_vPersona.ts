// =========================================
// LA VISTA DE LA PERSONA: "LOS OJOS Y LAS MANOS"
// =========================================
// Este archivo se encarga exclusivamente de mirar la pantalla (el HTML)
// y saber dónde están las cajitas de texto y los botones de la "Ventanita emergente".
// No hace cálculos, solo lee lo que el usuario escribe o muestra cosas en pantalla.
import { I_vPersona } from "../interfaces/I_vPersona.js";

export default class Cl_vPersona implements I_vPersona {
  // Aquí declaramos las variables que representarán a cada elemento de la pantalla
  private inNombre: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private inEdad: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement;

  // El "Constructor" se ejecuta al iniciar. Su trabajo es ir al archivo HTML (la pantalla)
  // y buscar cada elemento por su "ID" para conectarlos con este archivo.
  constructor() {
    // Busca la cajita donde escriben el nombre
    this.inNombre = document.getElementById("persona_inNombre") as HTMLInputElement;

    // Busca la lista desplegable del sexo
    this.inSexo = document.getElementById("persona_inSexo") as HTMLSelectElement;

    // Busca la cajita donde escriben la edad
    this.inEdad = document.getElementById("persona_inEdad") as HTMLInputElement;

    // Busca el botón gris de cancelar
    this.btCancelar = document.getElementById("persona_btCancelar") as HTMLButtonElement;

    // Busca el botón verde de aceptar
    this.btAceptar = document.getElementById("persona_btAceptar") as HTMLButtonElement;
    this.vista = document.getElementById("persona") as HTMLElement;
  }

  // =========================================
  // LEER Y ESCRIBIR EN LA PANTALLA
  // =========================================

  // Si alguien pregunta "get nombre", leemos qué texto hay en la cajita del nombre
  get nombre(): string {
    return this.inNombre.value;
  }
  // Si queremos escribir algo en la cajita del nombre ("set nombre")
  set nombre(nombre: string) {
    this.inNombre.value = nombre;
  }

  // Lo mismo para el sexo...
  get sexo(): string {
    return this.inSexo.value;
  }
  set sexo(sexo: string) {
    this.inSexo.value = sexo;
  }

  // Y lo mismo para la edad. Nota que al leer (get) lo convertimos en un número (parseInt)
  set edad(edad: number) {
    this.inEdad.value = `${edad}`;
  }
  get edad(): number {
    return parseInt(this.inEdad.value);
  }

  // =========================================
  // MOSTRAR Y OCULTAR LA VENTANA
  // =========================================

  // Esta función es para mostrar la ventana
  mostrar(): void {
    this.vista.hidden = false;
  }

  // Esta función es para ocultar la ventana
  ocultar(): void {
    this.vista.hidden = true;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
}
