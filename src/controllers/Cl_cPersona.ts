// =========================================
// EL CONTROLADOR DE LA PERSONA: "EL JEFE DE LA VENTANITA"
// =========================================
// El "Controlador" es como un Jefe o Director. 
// No hace el trabajo sucio directamente, pero coordina a los demás.
// Conecta a "La Vista" (la pantalla) con "El Modelo" (la tarjeta de datos).

import Cl_mPersona from "../models/Cl_mPersona.js";
import { I_vPersona } from "../interfaces/I_vPersona.js";

export default class Cl_cPersona {
  private vista: I_vPersona;
  private callback!: (persona: Cl_mPersona | null) => void;

  constructor(vista: I_vPersona) {
    this.vista = vista;
    // El controlador se suscribe a los eventos de la interfaz
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  // Método para que el Registro principal llame a este controlador
  solicitarPersona(callback: (persona: Cl_mPersona | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    // Y le dice a la vista que esconda la ventanita
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    this.callback(new Cl_mPersona({ 
        nombre: this.vista.nombre, 
        sexo: this.vista.sexo, 
        edad: this.vista.edad 
    }));
    this.vista.ocultar();
  }
}
