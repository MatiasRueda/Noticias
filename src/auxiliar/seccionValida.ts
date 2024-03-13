import { recomendaciones } from "./recomendaciones";

export const seccionValida = (field: string): boolean => {
  return !!recomendaciones.find((rec) => rec === field);
};
