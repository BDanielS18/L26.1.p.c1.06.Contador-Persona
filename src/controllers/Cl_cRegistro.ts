/* Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos datos
 y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, 
Rafael, Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de hombres: 5
Cantidad de mujeres: 7
 */

import Cl_mRegistro from "../models/Cl_mRegistro.js";
import Cl_vRegistro from "../views/Cl_vRegistro.js";
import Cl_cPersona from "./Cl_cPersona.js";
import Cl_mPersona from "../models/Cl_mPersona.js";
export default class Cl_cRegistro {
  private mRegistro: Cl_mRegistro = new Cl_mRegistro();
  private vRegistro: Cl_vRegistro = new Cl_vRegistro();
  constructor() {
    this.vRegistro.btNuevaPersona.onclick = () => this.procesar1Persona();
  }
  procesar1Persona() {
    new Cl_cPersona({
      callback: (p: Cl_mPersona | null) => {
        if (p !== null) {
          this.mRegistro.procesarPersona(p);

          // Actualiza la vista con la persona ingresada
          this.vRegistro.reportar({ nombre: p.nombre, sexo: p.sexo, edad: p.edad });

          // Muestra totales
          this.vRegistro.mostrarTotales(
            this.mRegistro.totalPersonas(),
            this.mRegistro.totalMujeres,
            this.mRegistro.totalHombres,
            this.mRegistro.edadMayor,
            this.mRegistro.sexoMayor,
          );
        }
      }
    });
  }
}
