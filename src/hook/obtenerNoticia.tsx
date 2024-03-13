import { useEffect, useState } from "react";

type Informacion<T> = {
  cargando: boolean;
  error: boolean;
  data?: T;
};

type Resultado<T> = {
  results: T[];
};

export default function obtenerNoticia<T>(url: string): Informacion<T[]> {
  const [data, setData] = useState<T[]>();
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function obtener() {
    try {
      console.log("Estoy aca");
      setCargando(true);
      const resultado = await fetch(url);
      const resultadoJSON: Resultado<T> = await resultado.json();
      setData(resultadoJSON.results);
      setCargando(false);
    } catch {
      setError(true);
    }
  }

  useEffect(() => {
    obtener();
  }, []);

  return { data, cargando, error };
}
