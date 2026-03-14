// =========================================
// EL MODELO DE REGISTRO: "EL CONTADOR MATEMÁTICO"
// =========================================
// Si Cl_mPersona era la tarjeta de una sola persona,
// este archivo es "El Contador" o la calculadora de nuestra oficina.
// Su único trabajo es llevar la cuenta de cuántos hombres o mujeres van llegando
// y quién es el mayor de todos.

// Traemos el molde de la persona para que el Contador sepa cómo leer la tarjeta.
import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mRegistro {
  // Estas son las libretitas donde el Contador va anotando los números.
  // Empiezan sin valores.
  private cntMujeres: number;
  private cntHombres: number;
  private mayorEdad: number = 0;
  private sexoMayorEdad: string = "";

  // Cuando abrimos la oficina (el Constructor), ponemos los contadores en cero.
  constructor() {
    this.cntMujeres = 0;
    this.cntHombres = 0;
  }

  // =========================================
  // LAS PREGUNTAS AL CONTADOR (Los "get")
  // =========================================
  // Si alguien le pregunta al Contador: "¿Cuántas mujeres hay?" él responde leyendo su libreta:
  get totalMujeres(): number {
    return this.cntMujeres;
  }
  // Si le preguntan "¿Cuántos hombres hay?":
  get totalHombres(): number {
    return this.cntHombres;
  }
  // Si le preguntan "¿Cuál es la edad de la persona más vieja?":
  get edadMayor(): number {
    return this.mayorEdad;
  }
  // Si le preguntan "¿De qué sexo es esa persona más vieja?":
  get sexoMayor(): string {
    return this.sexoMayorEdad;
  }

  // =========================================
  // EL TRABAJO PRINCIPAL: ANALIZAR A UNA PERSONA NUEVA
  // =========================================
  // Esta es la función principal. Le pasamos una "tarjeta" de persona (p)
  // y el Contador hace sus matemáticas.
  procesarPersona(p: Cl_mPersona): void {
    // Si en la tarjeta dice que el sexo es "M" (Mujer), le suma 1 a su libreta de mujeres.
    if (p.sexo === "M") {
      this.cntMujeres ++;
    }
    // Si el sexo es "H" (Hombre), le suma 1 a la libreta de hombres.
    if (p.sexo === "H") {
      this.cntHombres ++;
    }
    
    // Aquí revisa: ¿La edad de esta persona nueva es MAYOR que el récord de edad que teníamos guardado?
    // Si es así... ¡tenemos un nuevo récord! Guardamos la nueva edad mayor y su sexo.
    if (p.edad > this.mayorEdad) {
      this.mayorEdad = p.edad;
      this.sexoMayorEdad = p.sexo;
    }
  }

  // Si alguien pregunta "¿Cuántas personas en total han venido?", 
  // el Contador suma a los hombres y a las mujeres y da el resultado.
  totalPersonas(): number {
    return (this.cntMujeres + this.cntHombres);
  }
}
