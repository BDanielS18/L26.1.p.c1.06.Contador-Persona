import Cl_mPersona from "../models/Cl_mPersona.js";
import vista from "../views/Cl_vPersona.js";
export default class Cl_cPersona {
  private vista = new vista();
  callback: (persona: Cl_mPersona | null) => void;
  constructor({
    callback,
  }: {
    callback: (persona: Cl_mPersona | null) => void;
  }) {
    this.callback = callback;
    this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
    this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
  }
  btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  btAceptarOnClick() {
    this.callback(new Cl_mPersona({ nombre: this.vista.nombre, sexo: this.vista.sexo, edad: this.vista.edad }));
    this.vista.ocultar();
  }
}
