export interface I_vRegistro {
  onNuevaPersona(callback: () => void): void;
  reportar(persona: { nombre: string; sexo: string; edad: number }): void;
  mostrarTotales(
    totalPersonas: number,
    totalMujeres: number,
    totalHombres: number,
    edadMayor: number,
    sexoMayor: string
  ): void;
  mostrar(): void;
  ocultar(): void;
}
