/*
  EL PROBLEMA A RESOLVER:
Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos datos
y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, 
Rafael, Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de hombres: 5
Cantidad de mujeres: 7
  NUEVO REQUERIMIENTO: 
Se requiere que el programa indique cuál es el sexo con mayor edad.
 */

// =========================================
// EL CONTROLADOR PRINCIPAL: "EL JEFE MAYOR"
// =========================================
// Este es el Director General de todo el código.
// Él conoce al Contador Matemático (mRegistro) y a la Pantalla Principal (vRegistro).

import Cl_mRegistro from "../models/Cl_mRegistro.js";
import Cl_vRegistro from "../views/Cl_vRegistro.js";
import Cl_cPersona from "./Cl_cPersona.js";
import Cl_mPersona from "../models/Cl_mPersona.js";

export default class Cl_cRegistro {
  // El Jefe Mayor contrata a su Contador Matemático (para hacer cuentas)
  private mRegistro: Cl_mRegistro = new Cl_mRegistro();

  // El Jefe Mayor contrata a su Pantalla Principal (para mostrar resultados)
  private vRegistro: Cl_vRegistro = new Cl_vRegistro();

  // Cuando arranca el programa (Constructor)...
  constructor() {
    // ...el Jefe Mayor le dice a la pantalla: "Cuando alguien pulse el botón 'Nueva Persona', 
    // ejecutas mi función de procesar 1 persona".
    this.vRegistro.btNuevaPersona.onclick = () => this.procesar1Persona();
  }

  // =========================================
  // EL FLUJO DE TRABAJO
  // =========================================
  procesar1Persona() {
    // 1. Invoca al "Jefe de la Ventanita" (Cl_cPersona) para que abra el formulario.
    new Cl_cPersona({
      // 2. Le deja una instrucción (callback): "Cuando termines, mándame la tarjeta con los datos (p)".
      callback: (p: Cl_mPersona | null) => {

        // 3. Si la tarjeta NO está vacía (es decir, el usuario le dio a "Aceptar" y no a "Cancelar")...
        if (p !== null) {

          // A) Le pasa la tarjeta al Contador Matemático para que sume y haga sus cálculos.
          this.mRegistro.procesarPersona(p);

          // B) Le dice a la Pantalla Principal: "Escribe ahí los datos de esta persona que acaba de entrar".
          this.vRegistro.reportar({ nombre: p.nombre, sexo: p.sexo, edad: p.edad });

          // C) Le pide al Contador Matemático los números finales y le dice a la Pantalla Principal que los muestre en el cuadro azul.
          this.vRegistro.mostrarTotales(
            // "Oye contador, ¿cuántos hay en total?"
            this.mRegistro.totalPersonas(),

            // "Oye contador, ¿cuántas mujeres?"
            this.mRegistro.totalMujeres,

            // "Oye contador, ¿cuántos hombres?"
            this.mRegistro.totalHombres,

            // "Oye contador, ¿qué edad tiene el mayor?"
            this.mRegistro.edadMayor,

            // "Oye contador, ¿de qué sexo es?"
            this.mRegistro.sexoMayor,
          );
        }
      }
    });
  }
}
