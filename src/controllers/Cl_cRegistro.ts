/*
  EL PROBLEMA A RESOLVER:
Sea el nombre, la edad y el sexo de varias personas (F-M). Se necesita un programa que lea estos datos
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
import { I_vRegistro } from "../interfaces/I_vRegistro.js";
import Cl_cPersona from "./Cl_cPersona.js";
import Cl_vRegistro from "../views/Cl_vRegistro.js";
import Cl_vPersona from "../views/Cl_vPersona.js";

export default class Cl_cRegistro {
  // El Jefe Mayor contrata a su Contador Matemático (para hacer cuentas)
  private mRegistro: Cl_mRegistro = new Cl_mRegistro();
  private vRegistro: I_vRegistro;
  private cPersona: Cl_cPersona;

  constructor(vRegistro: I_vRegistro, cPersona: Cl_cPersona) {
    this.vRegistro = vRegistro;
    this.cPersona = cPersona;

    this.vRegistro.onNuevaPersona(() => this.procesar1Persona());
    this.vRegistro.mostrar();
  }

  private procesar1Persona() {
    this.cPersona.solicitarPersona((p) => {
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
    });
  }
}
