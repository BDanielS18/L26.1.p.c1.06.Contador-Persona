export interface I_vPersona {
  get nombre(): string;
  set nombre(n: string);
  get sexo(): string;
  set sexo(s: string);
  get edad(): number;
  set edad(e: number);
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
