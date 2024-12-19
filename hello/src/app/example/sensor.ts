export interface Sensor {
    id?: number;          // Opcional si Django genera el ID automáticamente
    name: string;         // Nombre del sensor
    value: number;        // Valor numérico del sensor
    unit: string;         // Unidad de la medición (por ejemplo, '°C', 'm/s')
    created_at: Date;     // Fecha de creación (puede ser Date si se convierte)
  }
  