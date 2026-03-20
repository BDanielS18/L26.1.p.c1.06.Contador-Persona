import { I_vRegistro } from "../interfaces/I_vRegistro.js";
// =========================================
// LA VISTA PRINCIPAL (REGISTRO): "LA PANTALLA PRINCIPAL"
// =========================================
// Este archivo es el encargado de la pantalla principal que vemos al apenas abrir la página.
// Su único trabajo es saber dónde están los textos en la pantalla para poder cambiarlos luego.

export default class Cl_vRegistro implements I_vRegistro {
  // Estas son las "etiquetas" o espacios en blanco de la pantalla donde escribiremos los resultados
  private lblNombre: HTMLInputElement;
  private lblSexo: HTMLInputElement;
  private lblEdad: HTMLInputElement;
  
  // Este es el botón que dice "Nueva Persona"
  private btNuevaPersona: HTMLButtonElement;
  
  // "vista" es la sección completa de la pantalla principal
  private vista: HTMLElement | null;
  
  // "salida" es el cuadro azul grandote donde ponemos los totales finales
  private salida: HTMLElement;

  // El "Constructor" arranca cuando abrimos la página. Busca en el HTML cada cosa por su nombre (ID).
  constructor() {
    // Busca la sección completa
    this.vista = document.getElementById("body");
    
    // Busca el cuadro azul de resultados
    this.salida = document.getElementById("salida") as HTMLElement;
    
    // Busca el botón "Nueva Persona"
    this.btNuevaPersona = document.getElementById("body_btNuevaPersona") as HTMLButtonElement;
    
    // Busca los espacios vacíos donde pondremos los datos de la última persona ingresada
    this.lblNombre = document.getElementById("body_lblNombre") as HTMLInputElement;
    this.lblSexo = document.getElementById("body_lblSexo") as HTMLInputElement;
    this.lblEdad = document.getElementById("body_lblEdad") as HTMLInputElement;
  }

  // =========================================
  // LAS ÓRDENES PARA CAMBIAR LA PANTALLA
  // =========================================

  // Cuando el Jefe (Controlador) le dice: "¡Oye pantalla, reporta a esta persona!"
  reportar({ nombre, sexo, edad }: { nombre: string; sexo: string; edad: number }): void {
    // La vista va al HTML y cambia el texto interior (innerHTML) por los datos nuevos
    this.lblNombre!.innerHTML = `${nombre}`;
    this.lblSexo!.innerHTML = `${sexo}`;
    this.lblEdad!.innerHTML = `${edad}`;
  }

  // Para mostrar la pantalla principal
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  
  // Para esconder la pantalla principal
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }

  // Cuando el Jefe le dice: "¡Oye pantalla, actualiza todos los números del cuadro azul!"
  mostrarTotales(totalPersonas: number, totalMujeres: number, totalHombres: number, edadMayor: number,
    sexoMayor: string): void {
      
    // Cambia el texto de adentro del cuadro azul (salida) por este mensaje con los resultados matemáticos
    this.salida.innerHTML = `
      Total de personas: ${totalPersonas} <br>
      Mujeres: ${totalMujeres} <br>
      Hombres: ${totalHombres} <br>
      Persona con Mayor Edad: ${edadMayor} <br>
      Sexo de Persona con Mayor Edad: ${sexoMayor}
    `;
  }

  onNuevaPersona(callback: () => void): void {
      this.btNuevaPersona.onclick = callback;
  }
}
