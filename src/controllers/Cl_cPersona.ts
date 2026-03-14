// =========================================
// EL CONTROLADOR DE LA PERSONA: "EL JEFE DE LA VENTANITA"
// =========================================
// El "Controlador" es como un Jefe o Director. 
// No hace el trabajo sucio directamente, pero coordina a los demás.
// Conecta a "La Vista" (la pantalla) con "El Modelo" (la tarjeta de datos).

import Cl_mPersona from "../models/Cl_mPersona.js";
import vista from "../views/Cl_vPersona.js";

export default class Cl_cPersona {
  // El jefe tiene a su cargo a la Vista de Persona (para leer lo que dice la pantalla)
  private vista = new vista();
  
  // "callback" es solo una palabra elegante para decir: 
  // "Un favor que haré cuando termine de trabajar para avisarle al Jefe Mayor (El Controlador Principal)".
  callback: (persona: Cl_mPersona | null) => void;

  // Cuando se crea este Controlador, recibe las instrucciones (el favor/callback)
  constructor({
    callback,
  }: {
    callback: (persona: Cl_mPersona | null) => void;
  }) {
    this.callback = callback;
    
    // El jefe le dice a los botones de la pantalla:
    // "Oye Botón Cancelar, cuando te hagan click, avísame ejecutando mi función btCancelarOnClick"
    this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
    
    // "Oye Botón Aceptar, cuando te hagan click, avísame ejecutando mi función btAceptarOnClick"
    this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
  }

  // =========================================
  // ¿QUÉ PASA AL HACER CLICK EN LOS BOTONES?
  // =========================================
  
  // Si hicieron click en Cancelar...
  btCancelarOnClick() {
    // Le avisa al Jefe Mayor que no se creó ninguna persona (le envía un mensaje "nulo" o vacío)
    this.callback(null);
    // Y le dice a la vista que esconda la ventanita
    this.vista.ocultar();
  }

  // Si hicieron click en Aceptar...
  btAceptarOnClick() {
    // 1. Lee lo que el usuario escribió en la pantalla (this.vista.nombre, sexo, edad).
    // 2. Con esos datos, fabrica una "tarjeta" nueva (new Cl_mPersona).
    // 3. Le envía esa tarjeta lista al Jefe Mayor.
    this.callback(new Cl_mPersona({ nombre: this.vista.nombre, sexo: this.vista.sexo, edad: this.vista.edad }));
    
    // Y finalmente, le dice a la vista que esconda la ventanita
    this.vista.ocultar();
  }
}
