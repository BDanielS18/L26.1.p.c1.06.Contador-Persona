// =========================================
// LA VISTA DE LA PERSONA: "LOS OJOS Y LAS MANOS"
// =========================================
// Este archivo se encarga exclusivamente de mirar la pantalla (el HTML)
// y saber dónde están las cajitas de texto y los botones de la "Ventanita emergente".
// No hace cálculos, solo lee lo que el usuario escribe o muestra cosas en pantalla.

export default class Cl_vPersona {
  // Aquí declaramos las variables que representarán a cada elemento de la pantalla
  inNombre: HTMLInputElement;
  inSexo: HTMLSelectElement;
  inEdad: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;

  // El "Constructor" se ejecuta al iniciar. Su trabajo es ir al archivo HTML (la pantalla)
  // y buscar cada elemento por su "ID" para conectarlos con este archivo.
  constructor() {
    // Busca la ventanita completa (el modal)
    this.vista = document.getElementById("persona") as HTMLElement;
    
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
    
    // Al principio, nos aseguramos de que la ventana se vea (aunque esté oculta por defecto en HTML)
    this.mostrar();
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
  
  // Esta función quita el atributo "oculto" (hidden = false) para que la ventanita aparezca
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  
  // Esta función pone el atributo "oculto" (hidden = true) para que la ventanita desaparezca
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
