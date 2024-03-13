import { ReactNode, createContext, useContext, useState } from "react";

export type EstadoContext = {
  cargando: boolean;
  comenzarCarga: () => void;
  sacarCarga: () => void;
};

const Estado = createContext<EstadoContext | undefined>(undefined);

export function useEstadoContext(): EstadoContext {
  return useContext(Estado)!;
}

export default function EstadoContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [cargando, setCarga] = useState<boolean>(false);

  const comenzarCarga = (): void => {
    setCarga(true);
  };

  const sacarCarga = (): void => {
    setCarga(false);
  };

  return (
    <Estado.Provider value={{ cargando, comenzarCarga, sacarCarga }}>
      {props.children}
    </Estado.Provider>
  );
}
