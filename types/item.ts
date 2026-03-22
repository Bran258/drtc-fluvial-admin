export type Item = {
  codigo: string;

  // 👇 NUEVO (clave)
  tipoPersona: "natural" | "juridica";
  tipoDocumento: "DNI" | "RUC";
  numeroDocumento: string;

  nombreCompleto?: string;   // persona natural
  razonSocial?: string;      // persona jurídica

  direccion: string;

  // Nave
  matricula: string;
  capacidad: string;
  color: string;
  nombreNave: string;
  tipo: string;
  material: string;

  // Motor
  marcaMotor: string;
  potencia: string;
};